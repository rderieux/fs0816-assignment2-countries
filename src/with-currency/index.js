const { getAllCountries } = require('../all');

module.exports = (cca3) => {

  if (!cca3 || cca3.length !== 3) {
    throw Error('Incorrect cca3 code');
  } else {
    cca3 = cca3.toUpperCase();
    return getAllCountries().filter(country => {
      return country.currency.includes(cca3);
    });
  }
};
