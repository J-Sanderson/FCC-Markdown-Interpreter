import React from 'react';
import { 
  render, 
  // fireEvent 
} from '@testing-library/react';
// import userEvent from '@testing-library/user-event'
import App from './components/App';

test('matches snapshot', () => {
  const container = render(<App />);
  expect(container).toMatchSnapshot();
});

test('responds to input', () => {
  const container = render(<App />);
  expect(container.getByTestId('text-input')).toHaveTextContent('Markdown');
  expect(container.getByTestId('preview')).toHaveTextContent('Markdown');
  // todo - type text
});