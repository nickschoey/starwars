// Extracts the consecutive digits from a string and returns them as an integer
// Used to extrapolate ids from the urls in the API
export default function extractDigits(string) {
  const getDigitRegEx = /\d+/;
  const id = parseInt(string.match(getDigitRegEx)[0], 10);

  return id;
}
