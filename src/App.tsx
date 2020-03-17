import React, { FC, useState, SyntheticEvent } from 'react';

import { Input } from './Input/Input';
import { calculateTax } from './helpers';

export const App: FC = () => {
  const [yearlyIncome, setYearlyIncome] = useState<string>('');

  const isIncomeValid = !Number.isNaN(+yearlyIncome);
  return (
    <main>
      <h1>SopraSteria</h1>
      <Input
        value={yearlyIncome}
        handleChange={(event: SyntheticEvent<HTMLInputElement>) => {
          setYearlyIncome(event.currentTarget.value);
        }}
      />

      {isIncomeValid && <div>Tax to pay is: {calculateTax(+yearlyIncome)}</div>}
      {!isIncomeValid && <div>Invalid value provided</div>}
    </main>
  );
};
