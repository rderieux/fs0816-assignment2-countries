const get = require('../get');

function calculateDistance(lat1, lon1, lat2, lon2, unit) {
  var radlat1 = Math.PI * lat1 / 180
  var radlat2 = Math.PI * lat2 / 180
  var theta = lon1 - lon2
  var radtheta = Math.PI * theta / 180
  var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
  dist = Math.acos(dist)
  dist = dist * 180 / Math.PI
  dist = dist * 60 * 1.1515
  if (unit == "K") {
    dist = dist * 1.609344
  }
  if (unit == "N") {
    dist = dist * 0.8684
  }
  return dist
}

module.exports = (firstCountry, secondCountry) => {

  const firstCountryDetails = get(firstCountry);
  const secondCountryDetails = get(secondCountry);

  const firstCountryLat = firstCountryDetails.latlng[0];
  const firstCountryLong = firstCountryDetails.latlng[1];

  const secondCountryLat = secondCountryDetails.latlng[0];
  const secondCountryLong = secondCountryDetails.latlng[1];

  return calculateDistance(firstCountryLat, firstCountryLong, secondCountryLat, secondCountryLong, 'N');
};
