const { curry } = require("../lib");

describe("curry", () => {
  it("throws an error if func is not a function", () => {
    expect(() => { curry(1); }).toThrow();
    expect(() => { curry({}); }).toThrow();
    expect(() => { curry({ a: 1, b: "apple" }); }).toThrow();
    expect(() => { curry([1, 2, 3]); }).toThrow();
    expect(() => { curry([]); }).toThrow();
    expect(() => { curry("apple"); }).toThrow();
    expect(() => { curry(null); }).toThrow();
    expect(() => { curry(undefined); }).toThrow();
  });

  it("returns the same func if it doesn't require any parameters", () => {
    const func = () => "apple";

    expect(curry(func)).toBe(func);
  });


  it("returns a new function if number of params passed is lower than func's arity", () => {
    const func = (a, b, c, d) => a + b + c + d;

    expect(typeof curry(func, 1)).toBe("function");
    expect(typeof curry(func, 1, 2)).toBe("function");
    expect(typeof curry(func, 1)(2)).toBe("function");
    expect(typeof curry(func, 1)(2)(3)).toBe("function");
    expect(typeof curry(func, 1)(2, 3)).toBe("function");
    expect(typeof curry(func)(1, 2, 3)).toBe("function");
  });

  it("returns a result of func's invocation if all the params have been passed", () => {
    const func = (a, b, c) => a + b + c;

    expect(curry(func, 1, 2, 3)).toBe(6);
    expect(curry(func, 1)(2)(3)).toBe(6);
    expect(curry(func, 1, 2)(3)).toBe(6);
    expect(curry(func, 1)(2, 3)).toBe(6);
    expect(curry(func)(1, 2, 3)).toBe(6);
  });
});
