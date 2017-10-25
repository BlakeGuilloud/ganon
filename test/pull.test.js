const { pull } = require("../lib");

describe("pull", () => {
  test("pull [2, 4, 7] from [1, 2, 4, 6, 7] should equal to [1, 6]", () => {

    expect(pull([1, 2, 4, 6, 7], [2, 4, 7])).toEqual([1, 6]);
  });

  test("pull 23, 7 from [23, 10, 2, 7] should equal to [23, 10]", () => {

    expect(pull([23, 10, 2, 7], 23, 7)).toEqual([23, 10]);
  });

});
