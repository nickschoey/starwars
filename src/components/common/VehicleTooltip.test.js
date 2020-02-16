import React from 'react';
import { render, screen } from '@testing-library/react';
import VehicleTooltip from './VehicleTooltip';

const mockStarship = {
  url: 'StarshipUrl',
  name: 'StarshipName',
  manufacturer: 'StarshipManufacturer',
  starship_class: 'StarshipClass',
  max_atmosphering_speed: '1000',
  hyperdrive_rating: 'StarshipHyperdrive',
  crew: '1000',
  passengers: '1000',
  cargo_capacity: '1000',
  cost_in_credits: '1000'
};

const mockVehicle = {
  url: 'VehicleUrl',
  name: 'VehicleName',
  manufacturer: 'VehicleManufacturer',
  vehicle_class: 'VehicleClass',
  max_atmosphering_speed: '1000',
  crew: '1000',
  passengers: '1000',
  cargo_capacity: '1000',
  cost_in_credits: 'unknown'
};

test('should render a starship with its particular props', () => {
  render(<VehicleTooltip vehicle={mockStarship} align="left" />);
  expect(
    screen.getByText('Hyperdrive Rating: StarshipHyperdrive')
  ).toBeInTheDocument();
  expect(screen.getByText('Class: StarshipClass')).toBeInTheDocument();
});

test('should render a vehicle with its particular props', () => {
  render(<VehicleTooltip vehicle={mockVehicle} align="left" />);
  expect(screen.getByText('Class: VehicleClass')).toBeInTheDocument();
});

test('should render numbers with commas and units', () => {
  render(<VehicleTooltip vehicle={mockStarship} align="left" />);
  expect(screen.getByText('1,000 credits')).toBeInTheDocument();
  expect(screen.getByText('Cargo: 1,000 tons')).toBeInTheDocument();
});

test('should render numbers with unknown values', () => {
  render(<VehicleTooltip vehicle={mockVehicle} align="left" />);
  expect(screen.getByText('Unknown Cost')).toBeInTheDocument();
});
