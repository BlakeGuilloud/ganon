const { or } = require("../lib");

describe("or (logical, all boolean params)", () => {
  // testing logical AND (i.e. when all params are boolean)
  test("true || true should return true", () => {
    expect(or(true, true)).toBe(true);
  });

  test("true || false should return true", () => {
    expect(or(true, false)).toBe(true);
  });

  test("false || true should return true", () => {
    expect(or(false, true)).toBe(true);
  });

  test("false || false should return false", () => {
    expect(or(false, false)).toBe(false);
  });

  test("Oring contents of [true, false] with true should return true", () => {
    expect(or([true, false], true)).toBe(true);
  });

  test("Oring contents of [false, false] with false or [false] should return false", () => {
    expect(or([false, false], false, [false])).toBe(false);
  });

  test("Oring contents of [true, false] with false should return true", () => {
    expect(or([true, false], false)).toBe(true);
  });

  test("Oring contents of [false] should return false", () => {
    expect(or([false])).toBe(false);
  });

  test("Oring true with nothing else should return true", () => {
    expect(or(true)).toBe(true);
  });
});

describe("or (bitwise, all integer params)", () => {
  // testing bitwise AND
  test("1 | 1 should return 1", () => {
    expect(or(1, 1)).toBe(1);
  });

  test("1 | 0 should return 1", () => {
    expect(or(1, 0)).toBe(1);
  });

  test("0 | 1 should return 1", () => {
    expect(or(0, 1)).toBe(1);
  });

  test("0 | 0 should return 0", () => {
    expect(or(0, 0)).toBe(0);
  });

  test("2 | 3 should return 3", () => {
    expect(or(2, 3)).toBe(3);
  });

  test("Oring contents of [2, 3] should return 3", () => {
    expect(or([2, 3])).toBe(3);
  });

  test("Oring contents of [2, 3] and 7 should return 7", () => {
    expect(or([2, 3], 7)).toBe(7);
  });

  test("Oring contents of [2, 3], 7 and [10] should return 15", () => {
    expect(or([2, 3], 7, [10])).toBe(15);
  });

  test("Oring 2, 3 and contents of [7, 9] should return 15", () => {
    expect(or(2, 3, [7, 9])).toBe(15);
  });

  test("Oring contents of [2, 3, 7, 9] should return 15", () => {
    expect(or([2, 3, 7, 9])).toBe(15);
  });

  test("Oring contents of [15] should return 15", () => {
    expect(or([15])).toBe(15);
  });

  test("Oring 15 with nothing else should return 15", () => {
    expect(or(15)).toBe(15);
  });
});

describe("or (bitwise, mix of boolean and integer params)", () => {
  // testing bitwise AND with mix of booleans and integers
  test("Oring true, true and 15 should return 15", () => {
    expect(or(true, true, 15)).toBe(15);
  });

  test("Oring contents of [true, false] with [9] and true should return 9", () => {
    expect(or([true, false], [9], true)).toBe(9);
  });

  test("Oring true and true with contents of [true, 9] should return 9", () => {
    expect(or(true, true, [true, 9])).toBe(9);
  });
});

