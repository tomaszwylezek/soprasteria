import * as CONST from './constants';

const calculateTaxFreeAmountNotRounded = (income: number): number => {
  if (income < CONST.LOWEST_BASE_END) {
    return CONST.LOWEST_BASE_FREE_AMOUNT;
  } else if (income < CONST.FIRST_GRADE_END) {
    return (
      CONST.LOWEST_BASE_FREE_AMOUNT -
      (CONST.FIRST_GRADE_MULTIPLIER * (income - CONST.LOWEST_BASE_END)) / CONST.FIRST_GRADE_DIVIDER
    );
  } else if (income < CONST.SECOND_GRADE_END) {
    return CONST.SECOND_GRADE_FREE_AMOUNT;
  } else if (income < CONST.THIRD_GRADE_END) {
    return (
      CONST.SECOND_GRADE_FREE_AMOUNT -
      (CONST.THIRD_GRADE_MULTIPLIER * (income - CONST.SECOND_GRADE_END)) / CONST.THIRD_GRADE_DIVIDER
    );
  } else {
    return 0;
  }
};

const calculateTaxFreeAmount = (income: number): number => +calculateTaxFreeAmountNotRounded(income).toFixed(2);

const calculateTax = (income: number): number => {
  const taxFreeAmount = calculateTaxFreeAmount(income);

  let tax;

  if (income < CONST.SECOND_GRADE_END) {
    tax = income * CONST.FIRST_TAX_THRESHOLD;
  } else {
    tax = CONST.MAX_TAX_FROM_FIRST_THRESHOLD + CONST.SECOND_TAX_THRESHOLD * (income - CONST.SECOND_GRADE_END);
  }

  return +(tax - taxFreeAmount).toFixed(2);
};

export { calculateTaxFreeAmount, calculateTax };
