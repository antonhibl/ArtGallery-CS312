// src/components/GalleryPage.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Gallery from './Gallery';
import { Button } from '@material-ui/core';

const GalleryPage = () => {
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    const fetchArtworks = async () => {
      const token = document.cookie.split('; ').find(row => row.startsWith('auth-token')).split('=')[1];
      try {
        const res = await axios.get('http://localhost:3000/api/gallery', { headers: { 'auth-token': token } });
        setArtworks(res.data);
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
