// src/components/ArtworkDetail.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Card, CardContent, Typography } from '@material-ui/core';

const ArtworkDetail = () => {
  const { id } = useParams();
  const [artwork, setArtwork] = useState(null);

  useEffect(() => {
    // Fetch artwork when component mounts
    axios.get(`/api/artworks/${id}`)
      .then(res => setArtwork(res.data))
      .catch(err => console.error(err));
  }, [id]);

  return (
    artwork && (
      <Card>
        <CardContent>
          <img src={artwork.imageUrl} alt={artwork.title} />
          <Typography variant="h5" component="h2">
            {artwork.title}
          </Typography>
          <Typography color="textSecondary">
            {artwork.description}
          </Typography>
        </CardContent>
      </Card>
    )
  );
};

export default ArtworkDetail;

