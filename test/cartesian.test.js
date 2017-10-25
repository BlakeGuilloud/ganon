const { cartesian } = require("../lib");

describe("cartesian", () => {
  test("valid cartesian product #1", () => {
    expect(cartesian([1,2])).toEqual([
      [1], [2]
    ]);
  });
  test("valid cartesian product #2", () => {
    expect(cartesian([1], [2], [3])).toEqual([
      [1, 2, 3]
    ]);
  });
  test("valid cartesian product #3", () => {
    expect(cartesian([1, 2], [3, 4], ["a", "b"])).toEqual([
      [1,3,"a"],[1,3,"b"],
      [1,4,"a"],[1,4,"b"],
      [2,3,"a"],[2,3,"b"],
      [2,4,"a"],[2,4,"b"]
    ]);
  });
  test("valid cartesian product #4", () => {
    expect(cartesian([1,2], [10,20], [100,200,300])).toEqual([
      [1, 10, 100], [1, 10, 200], [1, 10, 300], [1, 20, 100],
      [1, 20, 200], [1, 20, 300], [2, 10, 100], [2, 10, 200],
      [2, 10, 300], [2, 20, 100], [2, 20, 200], [2, 20, 300]
    ]);
  });
  test("valid cartesian product #5", () => {
    expect(cartesian([true, 2], [3, "a"])).toEqual([
      [true, 3], [true, "a"],
      [2, 3], [2, "a"]
    ]);
  });
  test("invalid cartesian product #1", () => {
    expect(() => cartesian(1, 2, 3)).toThrow(new Error("Parameters must be arrays!"));
  });
  test("invalid cartesian product #2", () => {
    expect(() => cartesian(1, 2, 3)).toThrow(new Error("Parameters must be arrays!"));
  });
  test("invalid cartesian product #3", () => {
    expect(() => cartesian([1], [2], 3)).toThrow(new Error("Parameters must be arrays!"));
  });
  test("invalid cartesian product #4", () => {
    expect(() => cartesian("a", [2], [3])).toThrow(new Error("Parameters must be arrays!"));
  });
  test("invalid cartesian product #5", () => {
    expect(() => cartesian([1, 2], [2], true)).toThrow(new Error("Parameters must be arrays!"));
  });
  test("invalid cartesian product #6", () => {
    expect(() => cartesian(undefined)).toThrow(new Error("Parameters must be arrays!"));
  });
  test("invalid cartesian product #7", () => {
    expect(() => cartesian(null)).toThrow(new Error("Parameters must be arrays!"));
  });
});
