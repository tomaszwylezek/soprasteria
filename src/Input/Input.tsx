import React, { FC, SyntheticEvent } from 'react';

export interface IInputProps {
  value: string;
  handleChange: (event: SyntheticEvent<HTMLInputElement>) => void;
}

export const Input: FC<IInputProps> = ({ value, handleChange }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={handleChange}
      data-testid="input"
      placeholder="Please type your yearly income"
    />
  );
};
