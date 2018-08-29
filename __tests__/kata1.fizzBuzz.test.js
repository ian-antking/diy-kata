const { fizzBuzz } = require('../src');

describe('fizzBuzz', () => {
  it('returns Fizz when passed a multiple of 3', () => {
    const result = fizzBuzz(3);
    expect(result).toBe('Fizz');
  });

  it('returns Buzz when passed a multiple of 5', () => {
    const result = fizzBuzz(5);
    expect(result).toBe('Buzz');
  });

  it('returns FizzBuzz when passed a multiple 3 and 5', () => {
    const result = fizzBuzz(15);
    expect(result).toBe('FizzBuzz');
  });

  it('returns the number when it isn\'t a multiple of 3 or 5', () => {
    const result = fizzBuzz(2);
    expect(result).toBe(2);
  });
});
