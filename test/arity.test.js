const { arity } = require("../lib");

describe("arity", () => {
  test("should return a number", () => {
    expect(typeof arity(() => {})).toEqual("number");
    expect(typeof arity(x => x, 9)).toEqual("number");
  });

  test("should throw an error if argument 1 is not a function", () => {
    expect(() => arity()).toThrow();
    expect(() => arity("[Function]", x => x)).toThrow();
    expect(() => arity(1, x => x)).toThrow();
  });

  test("it should return the exact arity of the function", () => {
    expect(arity(() => {})).toBe(0);
    expect(arity(x => x)).toBe(1);
    expect(arity((x, y) => x * y, 9, 9)).toBe(2);
  });
});