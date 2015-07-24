var got = require('got'),
  cheerio = require('cheerio');

module.exports = function (url, cb) {

  if (!url) {
    cb(new Error('Url is required.'), null);
  }

  got(url, function (err, data, res) {
    if (err) {
      cb(err, null);
    }

    var $ = cheerio.load(data);

    cb(null, $('title').text());
  });
};
