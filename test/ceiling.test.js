const { ceiling } = require("../lib");

describe("ceiling", () => {
  it("should throw an error if first argument is not a number", () => {
    expect(() => ceiling()).toThrow();
    expect(() => ceiling({a:2})).toThrow();
  });

  it("shouls return the same number by identity if it's whole", () => {
    const num1 = 7;
    const num2 = -23;
    expect(ceiling(num1)).toBe(num1);
    expect(ceiling(num2)).toBe(num2);
  });

  it("should return the nearest whole number greater than or equal to the parameter", () => {
    const num1 = 1.234;
    const num2 = 4.999;

    expect(ceiling(num1)).toEqual(2);
    expect(ceiling(num2)).toEqual(5);
  });

  it("negative numbers should be rounded up to the nearest whole number greater than or equal to it", () => {
    const num1 = -1.234;
    const num2 = -49.999;

    expect(ceiling(num1)).toEqual(-1);
    expect(ceiling(num2)).toEqual(-49);
  });
});
