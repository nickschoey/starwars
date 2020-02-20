import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import BackButton from './BackButton';
import 'jest-styled-components';

const component = <BackButton />;
const mockFn = jest.fn();
jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    goBack: mockFn
  })
}));

test('it renders', () => {
  render(component);
  expect(screen.getByText('<- Back')).toBeInTheDocument();
});

test('it navigates back when clicked', () => {
  const { getByText } = render(component);
  const button = getByText('<- Back');
  fireEvent.click(button);
  expect(mockFn).toHaveBeenCalled();
});
