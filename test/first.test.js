const { first } = require("../lib");

describe("first", () => {
  test("first of [1, 2, 3] to equal 1", () => {
    expect(first([1, 2, 3])).toBe(1);
  });

  test("first of [] to equal undefined", () => {
    expect(first([])).toBe(undefined);
  });

  test("first of \"hello\" to equal \"h\"", () => {
    expect(first("hello")).toBe("h");
  });
});
