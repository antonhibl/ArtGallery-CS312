import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from '../src/components/Home';

test('renders welcome message', () => {
  const { getByText } = render(<Home />);
  expect(getByText(/Welcome to the Art Gallery/)).toBeInTheDocument();
});
