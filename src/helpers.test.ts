import { calculateTaxFreeAmount, calculateTax } from './helpers';

describe('calculateTaxFreeAmount', () => {
  it('should return tax free amount from lowest base', () => {
    expect(calculateTaxFreeAmount(7600)).toBe(1360);
  });

  it('should return tax free amount based on first grade', () => {
    expect(calculateTaxFreeAmount(9500)).toBe(1109.54);
  });

  it('should return tax free amount based on second grade', () => {
    expect(calculateTaxFreeAmount(52567)).toBe(525.12);
  });

  it('should return tax free amount based on third grade', () => {
    expect(calculateTaxFreeAmount(99991)).toBe(341.99);
  });

  it('should return tax free amount when you earn too much :D', () => {
    expect(calculateTaxFreeAmount(100000000000)).toBe(0);
  });
});

describe('calculateTax', () => {
  it('should tax to pay when earn 1000', () => {
    expect(calculateTax(1000)).toBe(0);
  });

  it('should tax to pay when earn 10000', () => {
    expect(calculateTax(10000)).toBe(748.95);
  });

  it('should tax to pay when earn 22222', () => {
    expect(calculateTax(22222)).toBe(3419.28);
  });

  it('should tax to pay when earn 88888', () => {
    expect(calculateTax(88888)).toBe(15773.84);
  });
});
