#!/usr/bin/env node

var meow = require('meow');

var ttle = require('./');

var cli = meow({
  help: [
    'Usage',
    ' $ ttle <url>',
    '',
    'Example',
    ' $ ttle https://github.com',
    ''
  ]
});


ttle(cli.input[0], function (err, title) {
  if (err) {
    console.error(err.message);
    process.exit(1);
  }

  console.log(title);
});
