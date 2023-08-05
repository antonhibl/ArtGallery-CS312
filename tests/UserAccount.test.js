import React from 'react';
import { render } from '@testing-library/react';
import UserAccount from '../client/src/components/UserAccount';

test('renders user details and uploaded artworks', () => {
  const user = {
    username: 'testuser',
    email: 'test@example.com',
    artworks: [
      { id: 1, title: 'Artwork 1', thumbnailUrl: '/path/to/image1.jpg' },
      { id: 2, title: 'Artwork 2', thumbnailUrl: '/path/to/image2.jpg' },
    ],
  };
  const { getByText } = render(<UserAccount user={user} />);

  expect(getByText(`${user.username}'s Account`)).toBeInTheDocument();
  expect(getByText(`Email: ${user.email}`)).toBeInTheDocument();
  user.artworks.forEach(artwork => {
    expect(getByText(artwork.title)).toBeInTheDocument();
  });
});
