const { getAllCountries } = require('../all');

const maxCodeLength = 3;

module.exports = (cca3) =>{

  if (!cca3 && cca3.length !== maxCodeLength) {
    throw new Error();
  }

  const formattedCode = cca3.toUpperCase();
  const countries = getAllCountries().filter(country => country.cca3 === formattedCode);
  if (countries.length === 0) {
    throw new Error();
  }

  return countries.reduce((prev, country) => country);

};
