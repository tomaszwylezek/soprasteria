import * as CONST from './constants';

const calculateTaxFreeAmount = (income: number): number => {
  return CONST.THIRD_GRADE_FREE_AMOUNT;
};

export { calculateTaxFreeAmount };
