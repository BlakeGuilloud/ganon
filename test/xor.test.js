const { xor } = require("../lib");

describe("xor", () => {
  test("xor 0 and 1 should be 1", () => {
    expect(xor(0, 1)).toBe(1);
  });

  test("xor 0 and 0 should be 0", () => {
    expect(xor(0, 0)).toBe(0);
  });

  test("xor 1 and 0 should be 1", () => {
    expect(xor(1, 0)).toBe(1);
  });

  test("xor 1 and 1 should be 0", () => {
    expect(xor(1, 1)).toBe(0);
  });

  test("xor false and true when cast to boolean should be true", () => {
    expect(!!xor(0, 1)).toBe(true);
  });

  test("xor false and false when cast to boolean should be false", () => {
    expect(!!xor(0, 0)).toBe(false);
  });

  test("xor true and false when cast to boolean should be true", () => {
    expect(!!xor(1, 0)).toBe(true);
  });

  test("xor true and true when cast to boolean should be false", () => {
    expect(!!xor(1, 1)).toBe(false);
  });

  test("xor 3 and 5 should be 6", () => {
    expect(xor(3, 5)).toBe(6);
  });

  test("xor of contents of [3, 5] should be 6", () => {
    expect(xor([3, 5])).toBe(6);
  });

  test("xor of contents of [3, 5] and 7 should be 1", () => {
    expect(xor([3, 5], 7)).toBe(1);
  });

  test("xor of contents of [3, 5] and 7 and [9] should be 8", () => {
    expect(xor([3, 5], 7, [9])).toBe(8);
  });

  test("xor of 3 and 5 and contents of [7, 9] should be 8", () => {
    expect(xor(3, 5, [7, 9])).toBe(8);
  });

  test("xor of contents of [3, 5, 7, 9] should be 8", () => {
    expect(xor([3, 5, 7, 9])).toBe(8);
  });

  test("xor of contents of [3] should be 3", () => {
    expect(xor([3])).toBe(3);
  });

  test("xor of just 3 and nothing else should be 3", () => {
    expect(xor(3)).toBe(3);
  });

  test("xor of any thing with itself should be 0", () => {
    expect(xor(3, 3)).toBe(0);
  });
});
