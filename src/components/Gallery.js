// src/components/Gallery.js

import React from 'react';
import ArtworkCard from './ArtworkCard';

const Gallery = ({ artworks, onDelete }) => {
  return (
    <div>
      {artworks.map((artwork) => (
        <ArtworkCard key={artwork._id} artwork={artwork} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default Gallery;
