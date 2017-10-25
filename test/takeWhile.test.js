const { takeWhile } = require("../lib");

describe("takeWhile", () => {
  test("Simple array comparison", () => {
    expect(takeWhile([1, 2, 3, 4, 5], e => e < 5)).toEqual([1, 2, 3, 4]);

    expect(takeWhile([2, 4, 5], e => e % 2 === 0)).toEqual([2, 4]);
  });

  test("Comparison returns none", () => {
    expect(takeWhile([1, 2, 3], e => e < 1)).toEqual([]);
  });

  test("Comparison returns all", () => {
    expect(takeWhile([1, 2, 3], e => e < 4)).toEqual([1, 2, 3]);
  });

  test("Object comparisons", () => {
    expect(takeWhile([{ a: 1, b: 2 }, { a: 2, b: 2 }], e => e.a < 2)).toEqual([
      { a: 1, b: 2 }
    ]);
  });

  test("Parameters validation", () => {
    // should take two params
    expect(() => takeWhile()).toThrow();

    // first param should be an array
    expect(() => takeWhile("a", () => { })).toThrow();

    // second param should be a function
    expect(() => takeWhile([], "a")).toThrow();
  });
});
