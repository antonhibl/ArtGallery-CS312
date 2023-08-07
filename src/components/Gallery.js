// src/components/Gallery.js

import React from 'react';
import ArtworkCard from './ArtworkCard';

const Gallery = ({ artworks, onDelete, onEdit }) => (
  <div className="gallery">
    {artworks.map(artwork => <ArtworkCard key={artwork.id} artwork={artwork} onDelete={onDelete} onEdit={onEdit} />)}
  </div>
);

export default Gallery;
