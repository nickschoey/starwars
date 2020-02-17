import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import 'jest-styled-components';
import NesButton from './NesButton';
import { colors } from '../../helper/constants';

test('should properly render default props', () => {
  render(<NesButton>A Button</NesButton>);
  expect(screen.getByText('A Button')).toBeInTheDocument();
});

test('should properly render primary props', () => {
  render(<NesButton primary>Primary Button</NesButton>);
  expect(screen.getByText('Primary Button')).toHaveStyleRule(
    'color',
    colors.starWarsGreyPrimary
  );
});

test('should properly handle click function passed as prop', () => {
  const fn = jest.fn();
  render(<NesButton onClick={fn}>Button</NesButton>);
  fireEvent.click(screen.getByText('Button'));
  expect(fn).toHaveBeenCalled();
});
