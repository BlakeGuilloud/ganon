const { takeUntil } = require("../lib");

describe("takeUntil", () => {
  test("Should return an array containing elements of the given array up to but not including the first element that satisfies the predicate", () => {
    expect(takeUntil([1, 2, 3, 4, 5], e => e >= 5)).toEqual([1, 2, 3, 4]);
    expect(takeUntil([2, 4, 5], e => e % 2 !== 0)).toEqual([2, 4]);
    expect(takeUntil(["j", "a", "v", "a", "s", "c", "r", "i", "p", "t"], e => e === "s")).toEqual(["j", "a", "v", "a"]);
    expect(takeUntil(["apple", "pineapple", "applet", "application"], e => !e.includes("apple"))).toEqual(["apple", "pineapple", "applet"]);
    expect(takeUntil([true, true, true, false, false, true], e => !e)).toEqual([true, true, true]);
  });

  test("Should also work on an array of objects (or an array of arrays) just as it does with an array of numbers, strings, or booleans", () => {
    expect(takeUntil([{ a: 1, b: 2 }, { a: 2, b: 2 }], e => e.a >= 2)).toEqual([
      { a: 1, b: 2 }
    ]);
    expect(takeUntil([ [1, 2, 3], [2, 1, 1], [3, 2, 3] ], e => !e.includes(1))).toEqual([
      [1, 2, 3],
      [2, 1, 1]
    ]);
  });

  test("Should return an empty array if the predicate is satisfied by the first element of the given array", () => {
    expect(takeUntil([1, 2, 3], e => e >= 1)).toEqual([]);
  });

  test("Should return a copy of the entire array if the predicate is not satisfied by any element in the given array", () => {
    expect(takeUntil([1, 2, 3], e => e > 4)).toEqual([1, 2, 3]);
    expect(takeUntil([{ a: 1, b: 2 }, { a: 2, b: 2 }], e => e.a > 2)).toEqual([
      { a: 1, b: 2 },
      { a: 2, b: 2 }
    ]);
  });

  test("Should throw an error if called with invalid params", () => {
    // should take two params
    expect(() => takeUntil()).toThrow();
    expect(() => takeUntil( ["a"] )).toThrow();
    expect(() => takeUntil("a", "b", "c")).toThrow();

    // first param should be an array
    expect(() => takeUntil("a", () => { })).toThrow();

    // second param should be a function
    expect(() => takeUntil([], "a")).toThrow();
  });
});
