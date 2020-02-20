import capitalize from './capitalize';

test('should capitalize a string', () => {
  expect(capitalize('string')).toBe('String');
  expect(capitalize('s')).toBe('S');
});

test('should still return when first letter is a number or an empty string or a space', () => {
  expect(capitalize('1 problem')).toBe('1 problem');
  expect(capitalize('1')).toBe('1');
  expect(capitalize('')).toBe('');
  expect(capitalize(' ')).toBe(' ');
});

test('should return whatever is not a string', () => {
  expect(capitalize(21)).toBe(21);
  expect(capitalize([1, 2, 3])).toStrictEqual([1, 2, 3]);
  expect(capitalize({ a: 2 })).toStrictEqual({ a: 2 });
  expect(capitalize(undefined)).toStrictEqual(undefined);
  expect(capitalize(null)).toStrictEqual(null);
});
