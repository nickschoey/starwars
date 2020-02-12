const capitalize = s => {
  if (typeof s !== 'string') return s;
  return s.charAt(0).toUpperCase() + s.slice(1);
};

export default capitalize;
