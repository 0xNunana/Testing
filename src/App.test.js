import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByTestId(/learn-link/i);
  expect(linkElement).toBeInTheDocument();
});

test('url is what we want',()=>{
  render(<App/>)
  const linkElement = screen.getByTestId(/learn-link/i);
  expect(linkElement.href).toContain('https://reactjs.org')
}) 