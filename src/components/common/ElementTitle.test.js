import React from 'react';
import { render, screen } from '@testing-library/react';
import ElementTitle from './ElementTitle';

const component = <ElementTitle>Title</ElementTitle>;

test('it renders and renders children', () => {
  render(component);
  expect(screen.getByText('Title')).toBeInTheDocument();
});
