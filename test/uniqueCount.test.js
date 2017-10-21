const { uniqueCount } = require("../lib");

describe("uniqueCount", () => {
  test("should find 1 unique item in [1]", () => {
    expect(uniqueCount([1])).toEqual();
  });

  test("should find 1 unique item in [5,5,5]", () => {
    expect(uniqueCount([5,5,5])).toEqual(1);
  });

  test("should find 3 unique item in [1,2,3]", () => {
    expect(uniqueCount([1,2,3])).toEqual(3);
  });

  test("should find 2 unique items in [{a:1},{a:1}]", () => {
    expect(uniqueCount([{a:1},{a:1}])).toEqual(2);
  });

});


