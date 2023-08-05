import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const ArtworkCard = ({ artwork, onDelete, onEdit }) => (
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
    <CardActions>
      <Button size="small" onClick={() => onDelete(artwork.id)}>Delete</Button>
      <Button size="small" onClick={() => onEdit(artwork.id)}>Edit</Button>
    </CardActions>
  </Card>
);

export default ArtworkCard;
