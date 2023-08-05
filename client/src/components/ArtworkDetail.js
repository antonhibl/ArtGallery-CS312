import React from 'react';
import { Card } from '@fluentui/react';

const ArtworkDetail = ({ artwork }) => (
  <Card>
    <Card.Item>
      <img src={artwork.imageUrl} alt={artwork.title} />
    </Card.Item>
    <Card.Item>
      <h2>{artwork.title}</h2>
    </Card.Item>
    <Card.Item>
      <p>{artwork.description}</p>
    </Card.Item>
    // Add more artwork details here
  </Card>
);

export default ArtworkDetail;
