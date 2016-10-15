const _ = require('lodash');
const { getAllCountries } = require('../all');

const SUB_REGIONS = _.chain(getAllCountries()
  .map(country => country.subregion))
  .uniq()
  .compact()
  .value();

module.exports = (subRegion) => {

  if(!SUB_REGIONS.includes(subRegion)) {
    throw Error('Not found');
  } else {

    return getAllCountries()
      .filter(country => country.subregion === subRegion);
  }
};
