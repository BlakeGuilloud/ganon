## Ganon
A functional javascript library designed and built by open source contributors.

The project as it stands is extremely barebones and will eventually need some production minification techniques in place, as well as proper compilers for use in all versions of javascript, but for now, let's build some methods!

[![NPM version](https://img.shields.io/npm/v/ganon.svg)](https://www.npmjs.com/package/ganon)


### Usage
```
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
1. Fork this repo
2. Clone the fork
3. Fix a method
4. Write the skeleton of a new method
5. Push to your fork
6. Open a pull request in this repo!

#### A pull request will most likely be denied if it does not contain a skeleton method for someone else to work on!

### Development
While building new features, we are utilizing the [Jest](https://github.com/facebook/jest) testing framework for writing all of our unit tests.

In order to test a method, simply run `yarn test [methodName]`. I.E. `yarn test sum`.

You should notice several errors in the console for an unfinished method. Fix the method to make the test pass, and write a new combination of an unfinished method + test to accompany it!

### Demo
We're going to walk through the process of taking on an issue, resolving it, writing a new issue, and shipping some code.

The method we are going to resolve is called `sum`:

```javascript
// lib/sum.js

function sum(a, b) {
  // Your code goes here.
}

module.exports = sum;
```

In order to test this method, we will first run `yarn test sum`:

```
$ yarn test sum

  FAIL  problems/sum.test.js
    ✕ adds 1 + 2 to equal 3 (8ms)
    ✕ adds 3 + 4 to equal 7 (1ms)

    ● adds 1 + 2 to equal 3

      expect(received).toBe(expected)

      Expected value to be (using ===):
        3
      Received:
        undefined
```

As you can see, there is something wrong with the function sum, so let's resolve it:

```javascript
// lib/sum.js

function sum(a, b) {
  return a + b;
}

module.exports = sum;
```

Run the test again:

```
$ yarn test sum
  
  PASS  problems/sum.test.js
    ✓ adds 1 + 2 to equal 3 (6ms)
    ✓ adds 3 + 4 to equal 7 (1ms)
```

Now that I have fixed the sum function to return the desired value, I need to write the skeleton of a new method for other contributors to work on. Let's write one called `difference`:

```javascript
// lib/difference.js

// Write a function that returns the difference of the first two parameters

function difference(a, b) {
  // Your code goes here.
}

module.exports = difference;
```

We will need to accompany this method with a test(s) to ensure it returns the proper value:

```javascript
// test/difference.test.js

const { difference } = require('./lib');

test('subtracts 1 - 3 to equal -2', () => {
  expect(difference(1, 3)).toBe(-2);
});

test('subtracts 10 - 3 to equal 7', () => {
  expect(difference(10, 3)).toBe(7);
});
```

Now that we have fixed a method, written the skeleton of a new method, and a test to accompany it, we can push up our changes and open a pull request. :fire: