import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import 'jest-styled-components';
import Anchor from './Anchor';
import { colors } from '../../helper/constants';

const testMessage = 'Test Message';
const component = (
  <MemoryRouter>
    <Anchor to="/">{testMessage}</Anchor>
  </MemoryRouter>
);

test('shows the children', () => {
  render(component);
  expect(screen.getByText(testMessage)).toBeInTheDocument();
});

test('it applies default styles', () => {
  render(component);
  expect(screen.getByText(testMessage)).toHaveStyleRule(
    'text-decoration',
    'none'
  );
  expect(screen.getByText(testMessage)).toHaveStyleRule(
    'color',
    colors.starWarsYellow
  );
});

test('it applies styles according to passed props', () => {
  render(
    <MemoryRouter>
      <Anchor color={colors.starWarsWhite} to="/">
        {testMessage}
      </Anchor>
    </MemoryRouter>
  );
  expect(screen.getByText(testMessage)).toHaveStyleRule(
    'color',
    colors.starWarsWhite
  );
});
