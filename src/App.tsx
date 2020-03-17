import React, { FC, useState, SyntheticEvent } from 'react';

import { Input } from './Input/Input';

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
      <div> {yearlyIncome}</div>
    </main>
  );
};
