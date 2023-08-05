import React from 'react';
import { Card } from '@fluentui/react';

const ArtworkCard = ({ artwork }) => (
  <Card>
    <Card.Item>
      <img src={artwork.thumbnailUrl} alt={artwork.title} />
    </Card.Item>
    <Card.Item>
      <h2>{artwork.title}</h2>
    </Card.Item>
  </Card>
);

export default ArtworkCard;
