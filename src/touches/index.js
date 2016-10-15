const get = require('../get');

module.exports = (cca3) => {
  const country = get(cca3);
  return country.borders.map(border => {
    const country = get(border);
    console.log(country);
    return country;
  });
};
