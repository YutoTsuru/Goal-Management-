import React from 'react';
import { render, screen } from '@testing-library/react';
import Dashboard from '../../pages/Dashboard/Dashboard';

describe('Dashboard', () => {
  test('renders today\'s tasks', () => {
    render(<Dashboard />);
    const todayTasksElement = screen.getByText(/today's tasks/i);
    expect(todayTasksElement).toBeInTheDocument();
  });

  test('renders progress summary', () => {
    render(<Dashboard />);
    const progressSummaryElement = screen.getByText(/progress summary/i);
    expect(progressSummaryElement).toBeInTheDocument();
  });

  test('renders health data visualization', () => {
    render(<Dashboard />);
    const healthDataElement = screen.getByText(/health data/i);
    expect(healthDataElement).toBeInTheDocument();
  });

  test('renders weekly performance', () => {
    render(<Dashboard />);
    const weeklyPerformanceElement = screen.getByText(/weekly performance/i);
    expect(weeklyPerformanceElement).toBeInTheDocument();
  });

  test('renders monthly performance', () => {
    render(<Dashboard />);
    const monthlyPerformanceElement = screen.getByText(/monthly performance/i);
    expect(monthlyPerformanceElement).toBeInTheDocument();
  });
});