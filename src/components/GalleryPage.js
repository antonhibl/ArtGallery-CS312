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

  const handleAddArtwork = async (newArtwork) => {
    try {
      const res = await axios.post('http://localhost:3000/api/gallery', newArtwork, { headers: { 'auth-token': token } });
      setArtworks([...artworks, res.data]);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteArtwork = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/gallery/${id}`, { headers: { 'auth-token': token } });
      setArtworks(artworks.filter(artwork => artwork.id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  const handleEditArtwork = async (id, updatedArtwork) => {
    try {
      const res = await axios.put(`http://localhost:3000/api/gallery/${id}`, updatedArtwork, { headers: { 'auth-token': token } });
      setArtworks(artworks.map(artwork => artwork.id === id ? res.data : artwork));
    } catch (err) {
      console.error(err);
    }
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
