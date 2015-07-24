var ttt = require('../');

var chai = require('chai'),
  expect = chai.expect;


describe('ttt', function () {
  it('requires url', function () {
    ttt('', function (err, title) {
      expect(title).to.be.null;
    });
  });

  it('gets the title of the url passed from arg', function () {
    ttt('https://github.com', function (err, title) {
      expect(title).to.be.a('string');
    });
  });
});
