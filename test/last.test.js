const { last } = require("../lib");

describe("last", () => {
  test("last of [1, 2, 3] to equal 3", () => {
    expect(last([1, 2, 3])).toBe(3);
  });

  test("last of {} to equal []", () => {
    expect(last({})).toBe([]);
  });

  test("last of \"hello\" to equal [\"e\", \"l\", \"l\", \"o\"]", () => {
    expect(last("hello")).toBe(["e", "l", "l", "o"]);
  });
});
