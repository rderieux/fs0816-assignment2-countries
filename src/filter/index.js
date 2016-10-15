const { getAllCountries }  = require ('../all');

module.exports = (filterBy) => {
  const countries = getAllCountries();
  if (!filterBy) {
    return countries;
  } else {

    const filterParam = filterBy.toLowerCase();
    return countries.filter(country => country.name.common.toLowerCase().includes(filterParam) || country.name.official.toLowerCase().includes(filterParam));
  }

};
