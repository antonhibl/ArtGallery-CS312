import React from 'react';
import { Stack, Text, PrimaryButton } from '@fluentui/react';

const Home = () => (
  <Stack horizontalAlign="center" verticalAlign="center" tokens={{ childrenGap: 20 }}>
    <Text variant="xxLarge">Welcome to the Art Gallery</Text>
    <Text variant="large">Discover and explore amazing artworks from talented artists.</Text>
    <PrimaryButton href="/explore" text="Explore Artworks" />
  </Stack>
);

export default Home;
