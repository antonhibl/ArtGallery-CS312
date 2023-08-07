// src/components/GalleryPage.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Gallery from './Gallery';
import { useAuth } from './AuthContext';
import { Button, TextField } from '@material-ui/core';

const GalleryPage = () => {
  const { token, user } = useAuth();
  const [artworks, setArtworks] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

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

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleAddArtwork = async () => {
    if (!user) {
      alert('Please log in');
      return;
    }

    if (!selectedFile || !title || !description) {
      alert('Please fill in all fields');
      return;
    }

    const formData = new FormData();
    formData.append('image', selectedFile);
    formData.append('title', title);
    formData.append('description', description);
    formData.append('user', user._id); // Include the user's ID in the request body

    try {
      const res = await axios.post('http://localhost:3000/api/gallery', formData, { headers: { 'auth-token': token } });
      setArtworks([...artworks, res.data]);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteArtwork = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/gallery/${id}`, { headers: { 'auth-token': token } });
      setArtworks(artworks.filter(artwork => artwork._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h1>My Gallery</h1>
      <input type="file" onChange={handleFileChange} />
      <TextField label="Title" value={title} onChange={e => setTitle(e.target.value)} />
      <TextField label="Description" value={description} onChange={e => setDescription(e.target.value)} />
      <Button variant="contained" color="primary" onClick={handleAddArtwork}>Add Artwork</Button>
      <Gallery artworks={artworks} onDelete={handleDeleteArtwork} />
    </div>
  );
};

export default GalleryPage;

