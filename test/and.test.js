const { and } = require("../lib");

describe("and (logical, all boolean params)", () => {
  // testing logical AND (i.e. when all params are boolean)
  test("true && true should return true", () => {
    expect(and(true, true)).toBe(true);
  });

  test("true && false should return false", () => {
    expect(and(true, false)).toBe(false);
  });

  test("false && true should return false", () => {
    expect(and(false, true)).toBe(false);
  });

  test("false && false should return false", () => {
    expect(and(false, false)).toBe(false);
  });

  test("Anding contents of [true, false] with true should return false", () => {
    expect(and([true, false], true)).toBe(false);
  });

  test("Anding contents of [true, true] with true and [true] should return true", () => {
    expect(and([true, true], true, [true])).toBe(true);
  });

  test("Anding contents of [true, false] with true should return false", () => {
    expect(and([true, false], true)).toBe(false);
  });

  test("Anding contents of [false] should return false", () => {
    expect(and([false])).toBe(false);
  });

  test("Anding true with nothing else should return true", () => {
    expect(and(true)).toBe(true);
  });
});

describe("and (bitwise, all integer params)", () => {
  // testing bitwise AND
  test("1 & 1 should return 1", () => {
    expect(and(1, 1)).toBe(1);
  });

  test("1 & 0 should return 0", () => {
    expect(and(1, 0)).toBe(0);
  });

  test("0 & 1 should return 0", () => {
    expect(and(0, 1)).toBe(0);
  });

  test("0 & 0 should return 0", () => {
    expect(and(0, 0)).toBe(0);
  });

  test("2 & 3 should return 2", () => {
    expect(and(2, 3)).toBe(2);
  });

  test("Anding contents of [2, 3] should return 2", () => {
    expect(and([2, 3])).toBe(2);
  });

  test("Anding contents of [2, 3] and 7 should return 2", () => {
    expect(and([2, 3], 7)).toBe(2);
  });

  test("Anding contents of [2, 3], 7 and [10] should return 2", () => {
    expect(and([2, 3], 7, [10])).toBe(2);
  });

  test("Anding 2, 3 and contents of [7, 9] should return 0", () => {
    expect(and(2, 3, [7, 9])).toBe(0);
  });

  test("Anding contents of [2, 3, 7, 9] should return 0", () => {
    expect(and([2, 3, 7, 9])).toBe(0);
  });

  test("Anding contents of [15] should return 15", () => {
    expect(and([15])).toBe(15);
  });

  test("Anding 15 with nothing else should return 15", () => {
    expect(and(15)).toBe(15);
  });
});

describe("and (bitwise, mix of boolean and integer params)", () => {
  // testing bitwise AND with mix of booleans and integers
  test("Anding true, true and 15 should return 1", () => {
    expect(and(true, true, 15)).toBe(1);
  });

  test("Anding contents of [true, false] with [9] and true should return 0", () => {
    expect(and([true, false], [9], true)).toBe(0);
  });

  test("Anding true and true with contents of [true, 9] should return 1", () => {
    expect(and(true, true, [true, 9])).toBe(1);
  });
});
