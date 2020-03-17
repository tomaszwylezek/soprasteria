import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { App } from './App';

// Not sure why IDE does not recognise it - there is no error in console and it's in setupTests and all is working fine
// Added only to disable IDE highlighting 'that something is wrong'
import '@testing-library/jest-dom/extend-expect';

describe('App', () => {
  it('display name of company', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText('SopraSteria');
    expect(linkElement).toBeInTheDocument();
  });

  it('trigger an input and display information about invalid value', () => {
    const { getByTestId, getByText } = render(<App />);
    const searchInput = getByTestId('input');

    fireEvent.change(searchInput, { target: { value: 'sopra' } });
    expect(getByText('Invalid value provided')).toBeInTheDocument();
  });

  it('trigger an input and display information about tax', () => {
    const { getByTestId, getByText } = render(<App />);
    const searchInput = getByTestId('input');

    fireEvent.change(searchInput, { target: { value: '50000' } });
    expect(getByText(/Tax to pay is/i)).toBeInTheDocument();
  });
});
