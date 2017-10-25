const { product } = require("../lib");

describe("product", () => {
  test("multiplies 1 * 2 to equal 2", () => {
    expect(product(1, 2)).toBe(2);
  });

  test("multiplies 3 * 4 to equal 12", () => {
    expect(product(3, 4)).toBe(12);
  });

  test("multiplies 1.5 * 1.5 to equal 2.25", () => {
    expect(product(1.5, 1.5)).toBe(2.25);
  });

  test("multiplies 1.5 * 1.5 * 1.5 to equal 3.375", () => {
    expect(product(1.5, 1.5, 1.5)).toBe(3.375);
  });

  test("multiplies 1 * 2 * 3 to equal 6", () => {
    expect(product(1, 2, 3)).toBe(6);
  });

  test("multiplies 3 * 4 * [5 * 6] to equal 360", () => {
    expect(product(3, 4, [5, 6])).toBe(360);
  });

  test("multiplies contents of [3, 5] to equal 15", () => {
    expect(product([3, 5])).toBe(15);
  });

  test("multiplies contents of [3, 5, 7] to equal 105", () => {
    expect(product([3, 5, 7])).toBe(105);
  });

  test("multiplies contents of [3, 5, 7, 9] to equal 945", () => {
    expect(product([3, 5, 7, 9])).toBe(945);
  });

  test("multiplies contents of [3, 5] * 7 * [9] to equal 945", () => {
    expect(product([3, 5], 7, [9])).toBe(945);
  });

  test("multiplies 3 * 5 * contents of [7, 9] to equal 945", () => {
    expect(product(3, 5, [7, 9])).toBe(945);
  });

  test("multiplies contents of [3] to equal 3", () => {
    expect(product([3])).toBe(3);
  });

  test("multiplies 3 to nothing else to equal 3", () => {
    expect(product(3)).toBe(3);
  });

  test("multiplies 1.1 * 3 * 6.78 * 3.0 * 1.00 to be close to 68.46444", () => {
    expect(product(1.1, 3, 6.78, 3.0, 1.02)).toBeCloseTo(68.46444);
  });

  test("multiplies 3.0 * [1.5 * -2.5] * 0 * 0 * 1 to equal -11.25", () => {
    expect(product(3.0, [1.5, -2.5], 1)).toBe(-11.25);
  });

  test("multiplies 3 * true to equal 3", () => {
    expect(product(3, true)).toBe(3);
  });

  test("multiplies 3 * false to equal 0", () => {
    expect(product(3, false)).toBe(0);
  });

  test("multiplies true * false to equal 0", () => {
    expect(product(true, false)).toBe(0);
  });

  test("multiplies true * [true * 2] to equal 0", () => {
    expect(product(true, [true, 2])).toBe(2);
  });

  test("multiplies true * [true * 2], [2, 2, 1] to equal 8", () => {
    expect(product(true, [true, 2], [2, 2, 1])).toBe(8);
  });

  test("multiplies true * [true * 2], [false] to equal 0", () => {
    expect(product(true, [true, 2], [false])).toBe(0);
  });

  test("multiplies 3.01 * [1.1 * 2], [1.23, 2.02, 1.0004] to be close 16.4596", () => {
    expect(product(3.01, [1.1, 2], [1.23, 2.02, 1.0004])).toBeCloseTo(16.4596);
  });
});
