import { calculateTaxFreeAmount } from './helpers';

describe('CalculateTaxFreeAmount', () => {
  it('should return 0', () => {
    expect(calculateTaxFreeAmount(0)).toBe(0);
  });
});
