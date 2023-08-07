import React from 'react';
import { render } from '@testing-library/react';
import ArtworkCard from '../src/components/ArtworkCard';

test('renders artwork title and image', () => {
  const artwork = { id: 1, title: 'Artwork 1', thumbnailUrl: '/path/to/image.jpg' };
  const { getByText, getByAltText } = render(<ArtworkCard artwork={artwork} />);

  expect(getByText(artwork.title)).toBeInTheDocument();
  expect(getByAltText(artwork.title)).toHaveAttribute('src', artwork.thumbnailUrl);
});
