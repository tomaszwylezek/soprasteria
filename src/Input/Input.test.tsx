import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Input, IInputProps } from './Input';

// Not sure why IDE does not recognise it - there is no error in console and it's in setupTests and all is working fine
// Added only to disable IDE highlighting 'that something is wrong'
import '@testing-library/jest-dom/extend-expect';

describe('Input', () => {
  let props: IInputProps;
  beforeEach(() => {
    props = {
      value: '',
      handleChange: jest.fn()
    };
  });

  it('should render input', () => {
    const { getByTestId } = render(<Input {...props} />);
    const searchInput = getByTestId('input');
    expect(searchInput).toBeInTheDocument();
  });

  it('should call function on change', () => {
    const { getByTestId } = render(<Input {...props} />);
    const searchInput = getByTestId('input');

    fireEvent.change(searchInput, { target: { value: 'sopra' } });

    expect(props.handleChange).toHaveBeenCalledTimes(1);
  });
});
