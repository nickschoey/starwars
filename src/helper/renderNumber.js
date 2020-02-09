const renderNumber = (data, measure = '', unknownMsg = 'Unknown') => {
  const formatNumber = num => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  };
  const parsedNumber = parseInt(data, 10);
  // eslint-disable-next-line no-restricted-globals
  if (isNaN(parsedNumber)) {
    return unknownMsg;
  }
  return `${formatNumber(parsedNumber)}${measure}`;
};

export default renderNumber;
