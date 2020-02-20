import React from 'react';
import { render, screen, waitForElement } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import PersonMiniature from './PersonMiniature';

test('should mount with placeholder and load image', async () => {
  render(
    <MemoryRouter>
      <PersonMiniature name="Name" id={1} />
    </MemoryRouter>
  );
  await waitForElement(() => screen.getByAltText('Name'));
  expect(screen.getByAltText('Name')).toBeInTheDocument();
});

test('should load only miniature when justMiniature prop is passed', async () => {
  render(
    <PersonMiniature name="Miniature" id={1} justMiniature withLabel={false} />
  );
  await waitForElement(() => screen.getByAltText('Miniature'));
});

test('should load image with label', async () => {
  render(<PersonMiniature name="Miniature" id={1} justMiniature withLabel />);
  await waitForElement(() => screen.getByAltText('Miniature'));
});
