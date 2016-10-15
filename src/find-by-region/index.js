const _ = require('lodash');
const { getAllCountries } = require('../all');

// const REGIONS = _.chain(getAllCountries()
//   .map(country => country.region))
//   .uniq()
//   .compact()
//   .value();
//
// console.log(REGIONS);
//
// module.exports = (region) => {
//
//   if (!REGIONS.includes(region)) {
//     throw Error('Not found');
//   } else {
//
//     return getAllCountries()
//       .filter(country => country.region === region);
//   }
// };

const REGIONS = _.chain(getAllCountries()
  .map(function(country){
    return country.region}))
  .uniq() //lodash: Creates duplicate free array
  .compact()//Creates array with all falsey values removed
  .value();

console.log(REGIONS);

module.exports = (region) => {

  if (!REGIONS.includes(region)) {
    throw Error('Not found');
  } else {

    return getAllCountries()
      .filter(function(country){
        return country.region === region;
      })
  }
};


