import React from 'react';
import { render, screen } from '@testing-library/react';
import NesContainer from './NesContainer';
import 'jest-styled-components';

test('should render without title when none is passed', () => {
  render(<NesContainer>Text</NesContainer>);
  expect(screen.getByText('Text')).toBeInTheDocument();
});

test('should render with props when passed', () => {
  render(
    <NesContainer title="Title" titleSize="5px">
      More Text
    </NesContainer>
  );
  expect(screen.getByText('More Text')).toBeInTheDocument();
  expect(screen.getByText('Title')).toBeInTheDocument();
  expect(screen.getByText('Title')).toHaveStyleRule('font-size', '5px');
});
