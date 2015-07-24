# ttle

[![npm version](http://img.shields.io/npm/v/ttle.svg?style=flat)](https://github.com/makotot/ttle)
[![travis](http://img.shields.io/travis/makotot/ttle.svg?style=flat)](https://github.com/makotot/ttle)
[![dependencies](http://img.shields.io/david/makotot/ttle.svg?style=flat)](https://github.com/makotot/ttle)
[![devDependencies](http://img.shields.io/david/dev/makotot/ttle.svg?style=flat)](https://github.com/makotot/ttle)
[![License](http://img.shields.io/npm/l/ttle.svg?style=flat)](https://github.com/makotot/ttle)

> Get the title from an web page.

### Install

```sh
$ npm i -g ttle

or

$ npm i ttle
```

### Usage

```
$ ttle --help

  Get the title from an web page

  Usage
   $ ttle <url>

  Example
   $ ttle https://github.com

```

or

```js
var ttle = require('ttle');

ttle('https://github.com', function (err, title) {
  console.log(title);
});
```


## License

MIT
