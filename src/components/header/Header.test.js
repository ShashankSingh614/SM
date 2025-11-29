import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../components/header/Header';

describe('Header Component', () => {
  const mockContacts = [
    { id: '1', location: 'Goregaon', phone: '9819508524' },
    { id: '2', location: 'Malad', phone: '9223439986' },
  ];

  test('renders header with contact information', () => {
    render(<Header contacts={mockContacts} />);
    
    // Check if contact locations are rendered
    expect(screen.getByText('Goregaon')).toBeInTheDocument();
    expect(screen.getByText('Malad')).toBeInTheDocument();
    
    // Check if business hours are displayed
    expect(screen.getByText(/Monday To Saturday 8am To 9pm/)).toBeInTheDocument();
  });

  test('renders phone links with correct href attributes', () => {
    render(<Header contacts={mockContacts} />);
    
    const goregaonLink = screen.getAllByRole('link', { name: /Call Goregaon/ })[0];
    expect(goregaonLink).toHaveAttribute('href', 'tel:9819508524');
    
    const maladLink = screen.getAllByRole('link', { name: /Call Malad/ })[0];
    expect(maladLink).toHaveAttribute('href', 'tel:9223439986');
  });

  test('renders with default contacts when no props provided', () => {
    render(<Header />);
    
    // Should render default contact locations
    expect(screen.getByText('Goregaon')).toBeInTheDocument();
    expect(screen.getByText('Santacruz')).toBeInTheDocument();
  });
});