import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import react from 'react';
import Header from '../components/Header';

test('renders', () => {
  // Arrange
  // Act
  const button = render(<Header />);
  // Assert
  button.debug();
});
