import renderNumber from './renderNumber';

describe('renderNumber Helper Function', () => {
  test('should return a number as a string with commas every three digits', () => {
    expect(renderNumber(1000)).toBe('1,000');
    expect(renderNumber(100000)).toBe('100,000');
  });

  test('should properly append the measure string behind the digit', () => {
    expect(renderNumber(1000, 'kg')).toBe('1,000kg');
    expect(renderNumber(100000, '€')).toBe('100,000€');
  });

  test('should parse strings that can be converted into ints', () => {
    expect(renderNumber('1000', 'kg')).toBe('1,000kg');
    expect(renderNumber('100000')).toBe('100,000');
  });

  test('should return an "Unknown" string when value passed is not a number or can\'t be parsed', () => {
    expect(renderNumber('A house', '€')).toBe('Unknown');
    expect(renderNumber('2000', '€')).not.toBe('Unknown');
  });
});
