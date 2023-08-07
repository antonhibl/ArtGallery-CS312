// src/components/GalleryPage.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Gallery from './Gallery';
import { useAuth } from './AuthContext';
import { Button } from '@material-ui/core';

const GalleryPage = () => {
  const { token } = useAuth();
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
  const fetchArtworks = async () => {
    try {
      const res = await axios.get('http://localhost:3000/api/gallery', { headers: { 'auth-token': token } });
      let artworks = res.data;
        if (!Array.isArray(artworks)) {
          artworks = [];
        }
        setArtworks(artworks);
      } catch (err) {
        console.error(err);
      }
    };

    fetchArtworks();
  }, []);

  const handleAddArtwork = () => {
    // TODO: Implement add artwork functionality
  };

  const handleDeleteArtwork = id => {
    // TODO: Implement delete artwork functionality
  };

  const handleEditArtwork = id => {
    // TODO: Implement edit artwork functionality
  };

  return (
    <div>
      <h1>My Gallery</h1>
      <Button variant="contained" color="primary" onClick={handleAddArtwork}>Add Artwork</Button>
      <Gallery artworks={artworks} onDelete={handleDeleteArtwork} onEdit={handleEditArtwork} />
    </div>
  );
};

export default GalleryPage;
