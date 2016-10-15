const get = require('../get');

module.exports = (first, second) => {

  const firstArea = get(first).area;
  const secondArea = get(second).area;

  return Math.abs(firstArea - secondArea)
};
