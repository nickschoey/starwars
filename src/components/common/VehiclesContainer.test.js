import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import VehiclesContainer from './VehiclesContainer';

jest.mock('react-redux', () => ({
  useDispatch: () => {},
  useSelector: () => ({ 1: { url: 'url', id: 1, name: 'MockName' } })
}));

test('it renders with a messsage when an empty array is passed for spaceships and vehicles', () => {
  render(
    <VehiclesContainer
      vehicleIds={[]}
      type="spaceships"
      tooltipAlign="left"
      title="Spaceship"
    />
  );
  expect(
    screen.getByText('This character has no spaceships')
  ).toBeInTheDocument();

  cleanup();

  render(
    <VehiclesContainer
      vehicleIds={[]}
      type="vehicles"
      tooltipAlign="left"
      title="Vehicle"
    />
  );
  expect(
    screen.getByText('This character has no vehicles')
  ).toBeInTheDocument();
});

test('it renders a list of either spaceships or vehicles when ids are passed', () => {
  render(
    <VehiclesContainer
      vehicleIds={[1]}
      type="spaceships"
      tooltipAlign="left"
      title="Spaceship"
    />
  );
  expect(screen.getByText('Spaceship')).toBeInTheDocument();
  cleanup();
  render(
    <VehiclesContainer
      vehicleIds={[1]}
      type="vehicles"
      tooltipAlign="left"
      title="Vehicle"
    />
  );
  expect(screen.getByText('Vehicle')).toBeInTheDocument();
});
