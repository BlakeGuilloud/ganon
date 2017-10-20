const { unique } = require("../lib");

describe("unique", () => {
  test("should find 1 unique number in [1]", () => {
    expect(unique([1])).toEqual();
  });

  test("should find 1 unique number in [5,5,5]", () => {
    expect(unique([5,5,5])).toEqual(1);
  });

  test("should find 3 unique numbers in [1,2,3]", () => {
    expect(unique([1,2,3])).toEqual(3);
  });
});


