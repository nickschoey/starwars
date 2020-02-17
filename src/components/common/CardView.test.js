import React from 'react';
import { render, screen } from '@testing-library/react';
import CardView from './CardView';
import 'jest-styled-components';

const component = <CardView>A child</CardView>;

test('it renders', () => {
  render(component);
  expect(screen.getByText('A child')).toBeInTheDocument();
});
