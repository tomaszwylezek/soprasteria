import React, { FC, useState, SyntheticEvent } from 'react';

import { Input } from './Input/Input';
import { calculateTaxFreeAmount } from './helpers';

export const App: FC = () => {
  const [yearlyIncome, setYearlyIncome] = useState<string>('');
  return (
    <main>
      <h1>SopraSteria</h1>
      <Input
        value={yearlyIncome}
        handleChange={(event: SyntheticEvent<HTMLInputElement>) => {
          setYearlyIncome(event.currentTarget.value);
        }}
      />
      <div>Tax free amount is: {calculateTaxFreeAmount(+yearlyIncome)}</div>
    </main>
  );
};
