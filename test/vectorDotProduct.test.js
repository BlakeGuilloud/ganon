const { vectorDotProduct } = require("../lib");

describe("vectorDotProduct", () => {
  test("Should return the dot product", () => {
    expect(vectorDotProduct([4, 5, 6], [1, 2, 3])).toEqual(32);
    expect(vectorDotProduct([1, 2, 3], [4, 5, 6])).toEqual(32);
    expect(vectorDotProduct([1, 1, 1, 1, 1], [1, 1, 1, 1, 1])).toEqual(5);
    expect(vectorDotProduct([-2, 3, 1], [3, 4, -6])).toEqual(0);
  });

  test("Throw error on invalid arguments", () => {
    expect(() => vectorDotProduct()).toThrow("Invalid arguments");
    expect(() => vectorDotProduct([1], [1], [1])).toThrow("Invalid arguments");

    expect(() => vectorDotProduct([1, 2, 3], "3")).toThrow("Invalid arguments");
    expect(() => vectorDotProduct([1, 2, 3], null)).toThrow("Invalid arguments");
    expect(() => vectorDotProduct([1, 2, 3], undefined)).toThrow("Invalid arguments");
    expect(() => vectorDotProduct([1, 2, 3], ["one"])).toThrow("Invalid arguments");
    expect(() => vectorDotProduct([1, 2, 3], ["3"])).toThrow("Invalid arguments");
    expect(() => vectorDotProduct([1, 2, 3], [null])).toThrow("Invalid arguments");
    expect(() => vectorDotProduct([1, 2, 3], {})).toThrow("Invalid arguments");

    expect(() => vectorDotProduct([1, 2, 3], [2, 3])).toThrow("Invalid arguments");
  });
});
