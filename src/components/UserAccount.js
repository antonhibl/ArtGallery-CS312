import React from 'react';
import ArtworkCard from './ArtworkCard';
import { Stack, Text } from '@fluentui/react';

const UserAccount = ({ user }) => (
  <Stack tokens={{ childrenGap: 20 }}>
    <Text variant="xxLarge">{user.username}'s Account</Text>
    <Text variant="large">Email: {user.email}</Text>
    // Add more user details here

    <Text variant="xxLarge">Uploaded Artworks</Text>
    <Stack horizontal tokens={{ childrenGap: 20 }}>
      {user.artworks.map(artwork => <ArtworkCard key={artwork.id} artwork={artwork} />)}
    </Stack>
  </Stack>
);

export default UserAccount;
