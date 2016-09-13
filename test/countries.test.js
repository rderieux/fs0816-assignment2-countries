const Countries = require('../src');

describe('add', () => {

  it('adds 0 to 0 by default', () => {
    expect(Countries.add()).to.equal(0);
    expect(Countries.add(1)).to.equal(1);
    expect(Countries.add(1, 2)).to.equal(3);
  });
});

describe('Countries', () => {

  describe('package.json tasks', () => {

    const pkg = require('../package') || {};

    it('installed world-countries package', () => {
      expect(pkg.dependencies).to.contain('world-countries');
    });

    it('named properly', () => {
      const projectName = 'country-utilities';
      expect(pkg.name).to.equal(projectName);
    })

  });

  describe('#all([settings])', () => {

    it(`loads all the countries by setting loadAll = true`, () => {

      const result = Countries.all({ loadAll: true });

      expect(result).to.not.be.empty();
      expect(result.length).to.be.greaterThan(15);
    });

    it(`fetches a 15 countries by default, and the first page of data`, () => {
      const result = Countries.all({ index: 0, pageSize: 15});

      expect(result.length).to.equal(15);
    });

    it(`fetches a 15 countries, and the second page of data`, () => {
      const first = Countries.all({ loadAll: true })[0];
      const results = Countries.all({ index: 1, pageSize: 15});

      expect(results.length).to.equal(15);
      expect(results.map(country => country.cca3)).to.not.contain(first.cca3);
    });

    it(`fetches a 100 countries in the first page of data by setting the pageSize = 100`);

  });

  describe('#filter(parameter)', () => {

    it('shows only the countries that have that contain the query parameter in the common or official name', () => {
      const results = Countries.filter('States');
      expect(results).to.not.be.empty();
    });

    // Reuse the #all function
    it('shows all the countries if the search parameter is empty', () => {
      expect(Countries.filter()).to.be.equal(Countries.all());
    });


    it('shows a single country when the search parameter is an exact match', () => {
      const name = 'United States of America';
      const results = Countries.filter(name);
      expect(results.length).to.equal(1);
      expect(results[0].name.official).to.equal(name);
    });

  });

  describe('#get(code)', () => {

    it('retrieves a country by their cca3 code', () => {
      expect(Countries.get('USA').name.common).to.equal('United States')
    });


    it(`throws an error when anything but a 3 character code is entered`, () => {
      expect(() => Countries.get('bogus')).to.throw(/Error/);
    });

    // Look at the https://www.npmjs.com/package/common-errors project and use it to throw a https://www.npmjs.com/package/common-errors#notfound
    it(`throws an error, a NotFound error if the country code is not valid (not found)`, () => {
      expect(() => Countries.get('ZZZ')).to.throw(/NotFound/);
    });

  });

  // Use the cca3 code for the country, or the official name (Hint: the ccaa3 code is always 3 characters long)
  describe('#touches(countryCode)', () => {

    it('finds all the countries that touch a particular country (returns the full country object instead of the country code)', () => {

      expect(Countries.touches('USA')).to.be.a('object');
    });

  });

  describe(`#findByRegion(region)`, () => {

    it(`retrieves all the countries for a particular region`, () => {
      expect(Countries.findByRegion('Americas')).to.not.be.empty();
    });

    // Use the unique operator
    it(`has a constant that is exported for the known regions`, () => {
      expect(Countries.REGIONS.Americas).to.equal('Americas');
    });

    it(`throws an error if the region is not contained in the known regions`, () => {
      expect(() => Countries.findByRegion('SuperBogus')).to.throw(/Error/);
    });

  });

  describe(`#findBySubRegion(region)`, () => {

    it(`retrieves all the countries for a particular sub-region`, () => {
      expect(Countries.findBySubRegion('Northern America')).to.not.be.empty();
    });

    // Use the unique operator
    it(`has a constant that is exported for the known sub-region`, () => {
      expect(Countries.SUB_REGIONS.NorthernAmerica).to.equal('Northern America');
    });

    it(`throws an error if the region is not contained in the known sub-regions`, () => {
      expect(() => Countries.findBySubRegion('SuperBogus')).to.throw(/Error/);
    });

  });

  // Use the cca3 code
  describe('#distance(startingCountryCode, endingCountryCode)', () => {

    // Use something like this to calculate: http://www.geodatasource.com/developers/javascript
    it('calculates the distance using longitude and latitude of two countries, returns a positive number', () => {
      const distance = Countries.distance('USA', 'UZB');
      expect(distance).to.be.a.instanceof(Number);
      expect(distance).to.be.greaterThan(0);
    });

  });

  // Use the cca3 code
  describe('#subtractArea(startingCountryCode, endingCountryCode)', () => {

    it('subtracts the area of two countries, it must return a positive number', () => {
      const differenceInArea = Countries.subtractArea('USA', 'UZB');
      expect(differenceInArea).to.be.a.instanceof(Number);
      expect(differenceInArea).to.be.greaterThan(0);
    });

  });

  describe('#withCurrency(currencyCode)', () => {

    it(`finds all the countries that use a particular currency, eg 'USD'`, () => {
      expect(Countries.withCurrency('USD')).to.not.be.empty();
    });

    it(`returns empty if an invalid code is entered`, () => {
      expect(Countries.withCurrency('AAA')).to.be.empty();
    });

    it(`ensures the code is at least 3 characters long`, () => {
      expect(() => Countries.withCurrency('BOGUS')).to.throw(/Error/);
    });

  });

});
