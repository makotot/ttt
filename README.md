# ttt

[![npm version](http://img.shields.io/npm/v/ttt.svg?style=flat)](https://github.com/makotot/ttt)
[![travis](http://img.shields.io/travis/makotot/ttt.svg?style=flat)](https://github.com/makotot/ttt)
[![dependencies](http://img.shields.io/david/makotot/ttt.svg?style=flat)](https://github.com/makotot/ttt)
[![devDependencies](http://img.shields.io/david/dev/makotot/ttt.svg?style=flat)](https://github.com/makotot/ttt)
[![License](http://img.shields.io/npm/l/ttt.svg?style=flat)](https://github.com/makotot/ttt)

> Get the title from an web page.

### Install

```sh
$ npm i -g ttt

or

$ npm i ttt
```

### Usage

```
$ ttt --help

  Get the title from an web page

  Usage
   $ ttt <url>

  Example
   $ ttt https://github.com

```

or

```js
var ttt = require('ttt');

ttt('https://github.com', function (err, title) {
  console.log(title);
});
```


## License

MIT
