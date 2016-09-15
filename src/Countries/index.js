const countries = require('world-countries');
const _ = require('lodash');

// module.exports = {
//
//   add(x = 0, y = 0) {
//     return x + y;
//   },

  // all( settings = { loadAll: false, index: 0, pageSize: 15}){
  //   //check if load all is true
  //   return countries;
  //
  //   const startingIndex = settings.index * settings.pageSize;
  //   //slice the countries array using the paging calculation
  //
  //   return Countries.slice()
  // },

// };
// function all(settings = { loadAll: false, index: 0, pageSize: 15})
// {
//   return countries;
// }
//   const startingIndex = settings.index * settings.pageSize;
//
//   return countries.slice();
// }
// const firstPage = countries.all({loadAll: true});
//
// console.log(firstPage);

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

// const: firstPage = countries.all(),

};



const firstPage = countries.all();

console.log(module.exports);
