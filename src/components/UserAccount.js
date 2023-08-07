// UserAccount.js

import React from 'react';
import ArtworkCard from './ArtworkCard';
import { Typography, Box, Grid } from '@material-ui/core';
import { useAuth } from './AuthContext';

const UserAccount = () => {
  const { user } = useAuth();

  if (!user) {
    return null; // Or a loading spinner, or some other placeholder
  }

  return (
    <Box m={2}>
      <Typography variant="h3">{user.username}'s Account</Typography>
      <Typography variant="h5">Email: {user.email}</Typography>
      // Add more user details here

      <Typography variant="h3">Uploaded Artworks</Typography>
      <Grid container spacing={2}>
        {user.artworks.map(artwork => (
          <Grid item key={artwork.id}>
            <ArtworkCard artwork={artwork} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default UserAccount;
