import React from 'react';
import { render, screen } from '@testing-library/react';
import InfoElement from './InfoElement';

test('it renders passed props properly', () => {
  render(<InfoElement title="Some Title" data="Some Data" />);

  expect(screen.getByText('Some Data')).toBeInTheDocument();
  expect(screen.getByText('Some Title')).toBeInTheDocument();
});
