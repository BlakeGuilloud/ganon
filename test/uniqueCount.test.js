const { uniqueCount } = require("../lib");

describe("uniqueCount", () => {
  test("should find 1 unique item in [1]", () => {
    expect(uniqueCount([1])).toEqual(1);
  });

  test("should find 1 unique item in [5,5,5]", () => {
    expect(uniqueCount([5, 5, 5])).toEqual(1);
  });

  test("should find 3 unique item in [1,2,3]", () => {
    expect(uniqueCount([1, 2, 3])).toEqual(3);
  });

  test("should find 2 unique items in [{a:1},{a:1}]", () => {
    expect(uniqueCount([{ a: 1 }, { a: 1 }])).toEqual(2);
  });

  test("should find 6 unique items in [1,true,false,null,0,\"\",1 - 1]", () => {
    expect(uniqueCount([1, true, false, null, 0, "", 1 - 1])).toEqual(6);
  });

  test("should throw arr is not an Array", () => {
    expect(() => uniqueCount("foobar")).toThrow("arr is not an Array");
  });
});