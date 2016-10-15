const Countries = require('world-countries');
//const Wallaby = require('wallaby');

const getAllCountries = () => Countries;

const all = (settings = { loadAll: false, index: 0, pageSize: 15}) => {
  if(settings.loadAll) return getAllCountries();

  const startingIndex = settings.index * settings.pageSize;
  const endingIndex = startingIndex + settings.pageSize;

  return Countries.slice(startingIndex, endingIndex);
};

module.exports = all;

module.exports.getAllCountries = getAllCountries;

// const getAllCountries = Countries;
//
// const all = (settings = {loadAll: false, index: 0, pageSize: 15}) => {
//   if(settings.loadAll)
// };
