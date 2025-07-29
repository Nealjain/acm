import { render, screen } from '@testing-library/react';
import Home from './pages/Home';

test('renders welcome message', () => {
  render(<Home />);
  const headingElement = screen.getByText(/Welcome to ACM SAKEC/i);
  expect(headingElement).toBeInTheDocument();
});
