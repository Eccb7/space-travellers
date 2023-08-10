import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect'; // Import the extend-expect package
import NavBar from '../components/header/NavBar';

test('renders NavBar component correctly', () => {
  render(
    <MemoryRouter>
      <NavBar />
    </MemoryRouter>,
  );

  const logoElement = screen.getByAltText('logo');
  const titleElement = screen.getByText("Space Travellers' Hub");
  expect(logoElement).toBeInTheDocument();
  expect(titleElement).toBeInTheDocument();

  const rocketsLink = screen.getByText('Rockets');
  const missionsLink = screen.getByText('Missions');
  const profileLink = screen.getByText('My Profile');
  expect(rocketsLink).toBeInTheDocument();
  expect(missionsLink).toBeInTheDocument();
  expect(profileLink).toBeInTheDocument();
});
