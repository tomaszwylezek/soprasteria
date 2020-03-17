import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Input, IInputProps } from './Input';

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
