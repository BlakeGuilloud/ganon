const { takeUntil } = require("../lib");

describe("takeUntil", () => {
  test("Simple array comparison", () => {
    expect(takeUntil([1, 2, 3, 4, 5], e => e >= 5)).toEqual([1, 2, 3, 4]);

    expect(takeUntil([2, 4, 5], e => e % 2 !== 0)).toEqual([2, 4]);
  });

  test("Comparison returns none", () => {
    expect(takeUntil([1, 2, 3], e => e >= 1)).toEqual([]);
  });

  test("Comparison returns all", () => {
    expect(takeUntil([1, 2, 3], e => e > 4)).toEqual([1, 2, 3]);
  });

  test("Object comparisons", () => {
    expect(takeUntil([{ a: 1, b: 2 }, { a: 2, b: 2 }], e => e.a >= 2)).toEqual([
      { a: 1, b: 2 }
    ]);
  });

  test("Parameters validation", () => {
    // should take two params
    expect(() => takeUntil()).toThrow();

    // first param should be an array
    expect(() => takeUntil("a", () => { })).toThrow();

    // second param should be a function
    expect(() => takeUntil([], "a")).toThrow();
  });
});
