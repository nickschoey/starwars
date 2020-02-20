import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import FilmsContainer from './FilmsContainer';

jest.mock('react-redux', () => ({
  useDispatch: () => {},
  useSelector: () => ({ 1: { url: 'url', id: 1, title: 'MockTitle' } })
}));

test('it renders with a messsage when an empty array is passed', () => {
  render(<FilmsContainer filmIds={[]} />);
  expect(screen.getByText('No films happen here...')).toBeInTheDocument();
});

test('it renders film titles as anchors when film ids are passed', () => {
  render(
    <MemoryRouter>
      <FilmsContainer filmIds={[1]} />
    </MemoryRouter>
  );
  expect(screen.getByText('MockTitle')).toBeInTheDocument();
});
