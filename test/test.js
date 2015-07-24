var ttle = require('../');

var chai = require('chai'),
  expect = chai.expect;


describe('ttle', function () {
  it('requires url', function () {
    ttle('', function (err, title) {
      expect(title).to.be.null;
    });
  });

  it('gets the title of the url passed from arg', function () {
    ttle('https://github.com', function (err, title) {
      expect(title).to.be.a('string');
    });
  });
});
