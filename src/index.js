const all = require ('./all');
const filter = require ('./filter');
const get = require ('./get');
const touches = require ('./touches');
const findByRegion = require('./find-by-region');
const findBySubRegion = require('./find-by-subregion');
const distance = require('./distance');
const subtractArea = require('./subtract');
const withCurrency = require('./with-currency');

module.exports = {
  all,
  filter,
  get,
  touches,
  findByRegion,
  findBySubRegion,
  distance,
  subtractArea,
  withCurrency
};
