import extractId from './extractId';

test('should return only the numbers in a url string', () => {
  expect(extractId('https://swapi.co/api/films/2/')).toBe(2);
  expect(extractId('https://swapi.co/api/films/223/')).toBe(223);
  expect(extractId('https://swapi.co/api/films/211/')).toBe(211);
});
