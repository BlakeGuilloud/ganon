const { manhattanDistance } = require("../lib");

describe("manhattanDistance", () => {
  test("takes object arguments", () => {
    expect(() => manhattanDistance({}, {})).toThrow();
    expect(() => manhattanDistance(1, 2)).toThrow();
    expect(() => manhattanDistance("11", "22")).toThrow();
    expect(() => manhattanDistance(1, {x: 1, y: 2})).toThrow();
    expect(() => manhattanDistance({x: 1, y: 2}, {})).toThrow();
    expect(() => manhattanDistance({x: 1, y: 2}, {x: 2})).toThrow();
    expect(() => manhattanDistance({x: 1, y: 2}, [3, 4])).toThrow();
  });

  test("returns manhattan distance when called with positive integer values", () => {
    var X = {
      x: 10,
      y: 11
    };
    var Y = {
      x: 100,
      y: 100
    };
    expect(manhattanDistance(X, Y)).toBe(179);
  });

  test("returns manhattan distance when called with positive and negative integer values", () => {
    var X = {
      x: -10,
      y: 11
    };
    var Y = {
      x: 100,
      y: -100
    };
    expect(manhattanDistance(X, Y)).toBe(221);
  });

  test("returns manhattan distance when called with real values", () => {
    var X = {
      x: -100.67,
      y: 0.56
    };
    var Y = {
      x: 670.899,
      y: 89.1234
    };
    expect(manhattanDistance(X, Y)).toBe(860.1324);
  });

  test("returns manhattan distance when called with random values", () => {
    var X = {
      x: 6789,
      y: 90.89
    };
    var Y = {
      x: -12.8976,
      y: -67.89
    };
    expect(manhattanDistance(X, Y)).toBe(6960.6776);
  });
});