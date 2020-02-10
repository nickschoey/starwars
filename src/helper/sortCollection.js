const sortCollection = (collection, value, asc) => {
  return collection.sort((a, b) => {
    const valueA = a[value].toUpperCase();
    const valueB = b[value].toUpperCase();
    let comparison = 0;
    if (valueA > valueB) {
      comparison = asc ? 1 : -1;
    } else if (valueA < valueB) {
      comparison = asc ? -1 : 1;
    }
    return comparison;
  });
};

export default sortCollection;
