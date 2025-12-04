import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../../components/common/Header';

describe('Header Component', () => {
  test('renders the header with the correct title', () => {
    render(<Header />);
    const titleElement = screen.getByText(/Goal Management/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('renders navigation links', () => {
    render(<Header />);
    const dashboardLink = screen.getByText(/Dashboard/i);
    const goalsLink = screen.getByText(/Goals/i);
    const tasksLink = screen.getByText(/Tasks/i);
    const healthLink = screen.getByText(/Health/i);
    const journalLink = screen.getByText(/Journal/i);
    const socialLink = screen.getByText(/Social/i);
    
    expect(dashboardLink).toBeInTheDocument();
    expect(goalsLink).toBeInTheDocument();
    expect(tasksLink).toBeInTheDocument();
    expect(healthLink).toBeInTheDocument();
    expect(journalLink).toBeInTheDocument();
    expect(socialLink).toBeInTheDocument();
  });
});