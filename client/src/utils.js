export const merge = (...obj) => Object.assign({}, ...obj);
export const mergeArray = (a, b) => {
  const concattedArray = a.concat(b);
  return concattedArray.filter(function(item, index) {
    return concattedArray.indexOf(item) === index;
  });
};
