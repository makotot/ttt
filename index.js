var got = require('got'),
  cheerio = require('cheerio'),
  Iconv = require('iconv').Iconv,
  chardet = require('jschardet');


module.exports = function (url, cb) {

  if (!url) {
    cb(new Error('Url is required.'), null);
  }

  got(url, {encoding: null}, function (err, data, res) {
    if (err) {
      cb(err, null);
    }
    var encoding = chardet.detect(data).encoding,
      iconv = new Iconv(encoding, 'UTF-8//TRANSLIT//IGNORE'),
      converted = iconv.convert(data);

    var $ = cheerio.load(converted.toString('utf8'));

    cb(null, $('title').text());
  });
};
