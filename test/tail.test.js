const { tail } = require("../lib");

describe("tail", () => {
  test("tail of [1, 2, 3] should equal to [2, 3]", () => {

    expect(tail([1, 2, 3])).toEqual([2, 3]);
  });

  test("tail of \"hello\" to equal \"ello\"", () => {
    expect(tail("hello")).toEqual("ello");
  });

  test("tail of [\"John\",\"Doe\",46] to equal [\"Doe\",46]", () => {
    expect(tail(["John","Doe",46])).toEqual(["Doe",46]);
  });

});
