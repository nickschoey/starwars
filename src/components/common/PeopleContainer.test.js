import React from 'react';
import { render, screen, waitForElement } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import PeopleContainer from './PeopleContainer';

jest.mock('react-redux', () => ({
  useDispatch: () => {},
  useSelector: () => ({ 1: { url: 'url', id: 1, name: 'MockName' } })
}));

test('it renders with a messsage when an empty array is passed', () => {
  render(<PeopleContainer title="Title" peopleIds={[]} />);
  expect(screen.getByText('There is no one here...')).toBeInTheDocument();
});

test('it renders people miniatures when people ids are passed', async () => {
  render(
    <MemoryRouter>
      <PeopleContainer title="MockTitle" peopleIds={[1]} />
    </MemoryRouter>
  );
  await waitForElement(() => screen.getByText('MockName'));
  expect(screen.getByText('MockName')).toBeInTheDocument();
});
