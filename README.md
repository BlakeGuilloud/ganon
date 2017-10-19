## Ganon
A functional javascript library designed and built by open source contributors.

The project as it stands is extremely barebones and will eventually need some production minification techniques in place, as well as proper compilers for use in all versions of javascript, but for now, let's build some methods!

[![Build Status](https://travis-ci.org/BlakeGuilloud/ganon.svg?branch=master)](https://travis-ci.org/BlakeGuilloud/ganon) [![NPM version](https://img.shields.io/npm/v/ganon.svg)](https://www.npmjs.com/package/ganon) [![License](https://img.shields.io/npm/l/ganon.svg)](https://github.com/BlakeGuilloud/ganon/blob/master/LICENSE)


### Usage
```bash
$ yarn add ganon
```

```javascript
const { sum } = require('ganon');

const sumOfOneAndTwo = sum(1, 2);
=> 3
```

### Objective
To build a suite of javascript methods by the time [hacktoberfest](https://hacktoberfest.digitalocean.com/) ends! Let's get some T-shirts!!

Ganon is designed to get as many people involved as possible, so our objective here is to fix or improve an existing method and then write the skeleton of a desired method for someone else to build. In the spirit of getting everyone involved, please only fix one or two methods and make sure to push up something for someone else to work on!

### Project Structure
All methods will live in the `lib` directory of the project. They should be written as [methodName].js, required and exported in `lib/index.js`.

All tests will live in the `test` directory. A test file should be formatted `[methodName].test.js` to reflect what method is being tested.

### Contributing
Please read our [Contributing Guide](https://github.com/BlakeGuilloud/ganon/blob/master/CONTRIBUTING.md) for information on how to contribute to this project! All skill levels are more than welcome to participate in this project!