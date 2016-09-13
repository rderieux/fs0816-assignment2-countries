const countries = require('world-countries');

module.exports = {

  add(x = 0, y = 0) {
    return x + y;
  },


// all(loadAll = false, index = 0, pageSize = 15) {
//   if(loadAll) return countries;
//
// },

  all(settings = { loadAll: false, index: 0, pageSize: 15 }){
    // check if load all is true
    return countries;


    const startingIndex = settings.index * settings.pageSize;
    // slice the countries array using the paging calculation

    return countries.slice()
  },
//filter,
//get,
// etc

};
