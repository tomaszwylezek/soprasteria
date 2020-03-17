import React from 'react';
import { render } from '@testing-library/react';
import { App } from './App';

describe('App', () => {
  it('display name of company', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText('SopraSteria');
    expect(linkElement).toBeInTheDocument();
  });
});
