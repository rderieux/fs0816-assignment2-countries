# Countries Assignment
> Manipulate, Sort, and Build a Countries Management Tool

## Overview

The Countries Management tool allows a user to filter, sort, and manipulate a list of known countries in the world. 

### Fork the project, and clone it locally

Fork the project and clone it to your computer.  Forking it allows you to work on a copy on your github profile without interferring with the project.

### Install the missing packages

Whenever you clone/fork a repository the first thing you should do is install the missing packages.  To install the missing packages, open a terminal in the directory that you cloned the project to and run the command: 

```bash
$ npm install
```

### Run the test

When your tests are all completed and passing this will indicate that your project is complete.  Before you start working on the assignment make sure the tests are able to run.

```bash
$ npm test
```
All of the tests should fail, or be inconclusive.

The describe() function indicates the purpose of grouping for the tests.  Describe tests that begin with a '#' character indicate that it is exercising a function based test or the #bogus(name) should test a function called 'bogus'.

### Rename the project to country-utilities in the package.json

The name of the project can be manipulated in the package.json file. Using the name attribute in the json, you can change the name of the project.  

### Install the countries data

Using npm install the world-countries project and save it to the package.json file. Remember, you can save an installation by using the --save flag within the terminal like:

```bash
$ npm install world-countries --save
```

**-or-**

```bash
$ npm i world-countries -S
```

To use the data, simply require the 'world-countries' package into a javascript file and you should get a javascript array that looks like https://raw.githubusercontent.com/mledoze/countries/master/dist/countries.json

```js
const countries = require('world-countries');
console.log(countries);
```

The country objects should look similar to:

```js
{
    name: {
        common: "United States",
        official: "United States of America",
        native: {
            eng: {
                official: "United States of America",
                common: "United States"
            }
        }
    },
    tld: [
        ".us"
    ],
    cca2: "US",
    ccn3: "840",
    cca3: "USA",
    cioc: "USA",
    currency: [
        "USD",
        "USN",
        "USS"
    ],
    callingCode: [
        "1"
    ],
    capital: "Washington D.C.",
    altSpellings: [
        "US",
        "USA",
        "United States of America"
    ],
    region: "Americas",
    subregion: "Northern America",
    languages: {
        eng: "English"
    },
    translations: {
        deu: {
            official: "Vereinigte Staaten von Amerika",
            common: "Vereinigte Staaten von Amerika"
        },
        fra: {
            official: "Les états-unis d'Amérique",
            common: "États-Unis"
        },
        hrv: {
            official: "Sjedinjene Države Amerike",
            common: "Sjedinjene Američke Države"
        },
        ita: {
            official: "Stati Uniti d'America",
            common: "Stati Uniti d'America"
        },
        jpn: {
            official: "アメリカ合衆国",
            common: "アメリカ合衆国"
        },
        nld: {
            official: "Verenigde Staten van Amerika",
            common: "Verenigde Staten"
        },
        por: {
            official: "Estados Unidos da América",
            common: "Estados Unidos"
        },
        rus: {
            official: "Соединенные Штаты Америки",
            common: "Соединённые Штаты Америки"
        },
        spa: {
            official: "Estados Unidos de América",
            common: "Estados Unidos"
        },
        svk: {
            official: "Spojené štáty Americké",
            common: "Spojené štáty"
        },
        fin: {
            official: "Amerikan yhdysvallat",
            common: "Yhdysvallat"
        },
        zho: {
            official: "美利坚合众国",
            common: "美国"
        }
    },
    latlng: [
        38, -97
    ],
    demonym: "American",
    landlocked: false,
    borders: [
        "CAN",
        "MEX"
    ],
    area: 9372610
}
```


### Countries.all([settings])

> The all function should return the unadulterated country information. Optional parameters can limit the amount of countries that can be viewed by default (set the default to 15).  This is called paging.

Calculate the startingIndex by using the calculation `startIndex = index * pageSize`. 

At the `startIndex` item in the array, you'll take `x` number of items where `x = pageSize`.  That is considered a page of data.
   


**Settings Parameters**

| Parameters | Type | Description | Optional |
| --- | --- | --- | --- |
| loadAll | Boolean | Ignores the page and index retrieving all the countries | Yes |
| index | Number (Positive) | The index of the page your on, by default it's 0, and also starts at 0 | Yes |
| pageSize | Number (Positive) | The number of items that are considered a 'page'.  The default is 15. | Yes |



**Example Usage**

```js
const Countries = require('./src');

// Default PageSize
const firstPage = Countries.all(); // index=0, pageSize=15
const secondPage = Countries.all({ index: 1 }); // index=1, pageSize=15 

// Large pageSize
const firstLargePage = Countries.all({ pageSize: 1000}); // index=0, pageSize=1000
const secondLargePage = Countries.all({index: 1, pageSize: 1000}); // index=0, pageSize=1000
```


### Countries.filter(filterBy)

> Filter down the countries by their common or official name.  When the string is empty it should return all the countries

```js
const results = Countries.filter('United States');
```


### Countries.get(code)

> Retrieves a single country by it's 3 digit code.  The parameter should throw an error if it's not 3 digits long.  The result should be an object not an array

```js
const resut = Countries.get('USA');
```

### Countries.touches(code)

> Retrieve all the countries that touch the country (based on the code entered).  The results should be an array of objects with the countries returned as full objects.  (Hint use the get function once you find the countries that touch)

```js
const results = Countries.touches('USA');
```

### Countries.findByRegion(region)

> Retrieves all the countries by their regions.  We'll want to create a constant named 'REGIONS' that contains a unique list of regions.  This will be helpful to determine if a valid region is added.  The result should be an array of countries.

```js
const results = Countries.findByRegion('Americas');
```

### Countries.findBySubRegion(subRegion)

> Retrieves all the countries by their sub-region.  We'll want to create a constant named 'SUB_REGIONS' that contains a unique list of sub-regions.  This will be helpful to determine if a valid sub region is added.  The result should be an array of countries.

```js
const results = Countries.findBySubRegion('Northern America');
```


### Countries.distance(startingCountryCode, endingCountryCode);

> Calculates the distance using the longitude and latitude.


