const { tail } = require("../lib");

describe("tail", () => {
  test("tail of [1, 2, 3] should equal to [2, 3]", () => {
    expect(tail([1, 2, 3])).toBe([2, 3]);
  });


  test("tail of \"hello\" to equal \"ello\"", () => {
    expect(tail("hello")).toBe("ello");
  });
});
