const { sum } = require("../lib");

describe("sum", () => {
  test("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });

  test("adds 3 + 5 to equal 8", () => {
    expect(sum(3, 5)).toBe(8);
  });

  test("adds contents of [3, 5] to equal 8", () => {
    expect(sum([3, 5])).toBe(8);
  });

  test("adds contents of [3, 5, 7] to equal 15", () => {
    expect(sum([3, 5, 7])).toBe(15);
  });

  test("adds contents of [3, 5, 7, 9] to equal 24", () => {
    expect(sum([3, 5, 7, 9])).toBe(24);
  });

  test("adds contents of [3, 5] + 7 + [9] to equal 24", () => {
    expect(sum([3, 5], 7, [9])).toBe(24);
  });

  test("adds 3 + 5 + contents of [7, 9] to equal 24", () => {
    expect(sum(3, 5, [7, 9])).toBe(24);
  });

  test("adds contents of [3] to equal 3", () => {
    expect(sum([3])).toBe(3);
  });

  test("adds 3 to nothing else to equal 3", () => {
    expect(sum(3)).toBe(3);
  });

  test("adds 1.1 + 3 + 6.78 + 3.0 + 0.00 to equal 13.88", () => {
    expect(sum(1.1, 3, 6.78, 3.0, 0.00).toFixed(2)).toBe("13.88");
  });

  test("adds 3.0 + 1.5 + -2.5 + 0 + 0 + 1 to equal 3", () => {
    expect(sum(3.0, 1.5, -2.5, 0, 0, 1)).toBe(3);
  });

  test("adds 3 + true to equal 4", () => {
    expect(sum(3, true)).toBe(4);
  });

  test("adds 3 + false to equal 3", () => {
    expect(sum(3, false)).toBe(3);
  });

  test("adds true + false to equal 1", () => {
    expect(sum(true, false)).toBe(1);
  });
});
