import React from 'react';
import ArtworkCard from './ArtworkCard';

const Gallery = ({ artworks }) => (
  <div className="gallery">
    {artworks.map(artwork => <ArtworkCard key={artwork.id} artwork={artwork} />)}
  </div>
);

export default Gallery;
