# [ansi-colors-prioritized][repo-url] [![MIT License][mit-img]][mit-url] [![Build Status][travis-img]][travis-url] [![Build Status][appveyor-img]][appveyor-url] [![Coverage Status][coverage-img]][coverage-url]


Enables prioritized and nestable coloring of texts using [ansi-colors][ansi-colors-url].


## Install

```sh
$ npm install ansi-colors-prioritized --save-dev
```


## Usage

```js
const prioritizedColor = require('ansi-color-prioritized');

const chaik = require('chalk');
const ansiColors = require('ansi-colors');

colorCandidate0 = '';  // null, empty or unsupported color name
colorCandidate1 = ansi.green;
colorCandidate2 = ansi.gray;

const color = prioritizedColor(colorCandidate0, colorCandidate1, colorCandidate2);

color('This package enables ', ansi.red('prioritized'), ' and ', ansi.magenta('nested'), ' coloring.');
// color is colorCandidate1 (ansi.green) in this case.
```


## API

### <u>prioritizedColor(...color) : function</u>

This function accepts multiple arguments each of which is either a coloring function or a color name, and chooses first available color among the arguments.

This function returns a coloring function, which is created by [ansi-colors-nestable][ansi-colors-nestable-url] inside of this package, and accepts multiple argument texts and colors each of them with the chosen *color*. Therefore this returned function supports nested coloring.

This function uses the package [ansi-colors][ansi-colors-url] inside for supporting Node.js >= v0.10.
So color names need to be supported by [ansi-colors][ansi-colors-url].


#### Parameters:

| Parameter | Type            | Description                     |
|:----------|:---------------:|:--------------------------------|
| *color*   | string|function | color name or coloring function |

#### Returns:

A coloring function which can colorize multiple argument texts.

**Type:** function


## License

Copyright (C) 2017 Takayuki Sato

This program is free software under [MIT][mit-url] License.
See the file LICENSE in this distribution for more details.


[repo-url]: https://github.com/sttk/ansi-colors-prioritized/
[npm-img]: https://img.shields.io/badge/npm-v0.1.0-blue.svg
[npm-url]: https://www.npmjs.org/package/ansi-colors-prioritized/
[mit-img]: https://img.shields.io/badge/license-MIT-green.svg
[mit-url]: https://opensource.org/licenses.MIT
[travis-img]: https://travis-ci.org/sttk/ansi-colors-prioritized.svg?branch=master
[travis-url]: https://travis-ci.org/sttk/ansi-colors-prioritized
[appveyor-img]: https://ci.appveyor.com/api/projects/status/github/sttk/ansi-colors-prioritized?branch=master&svg=true
[appveyor-url]: https://ci.appveyor.com/project/sttk/ansi-colors-prioritized
[coverage-img]: https://coveralls.io/repos/github/sttk/ansi-colors-prioritized/badge.svg?branch=master
[coverage-url]: https://coveralls.io/github/sttk/ansi-colors-prioritized?branch=master
[ansi-colors-url]: https://www.npmjs.com/package/ansi-colors
[ansi-colors-nestable-url]: https://github.com/sttk/ansi-colors-nestable/
