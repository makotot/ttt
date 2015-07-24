#!/usr/bin/env node

var meow = require('meow');

var ttt = require('./');

var cli = meow({
  help: [
    'Usage',
    ' $ ttt <url>',
    '',
    'Example',
    ' $ ttt https://github.com',
    ''
  ]
});


ttt(cli.input[0], function (err, title) {
  if (err) {
    console.error(err.message);
    process.exit(1);
  }

  console.log(title);
});
