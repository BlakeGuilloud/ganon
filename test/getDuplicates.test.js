const { getDuplicates } = require("../lib");
const testNum = 5;
const testArr = [1,1,1,1,1,3,1,2,3,4,1];
const testArr2 = [1,2,3,4,5,6,7,8,9,0];

describe("getDuplicates", () => {
  test("it should return if not an array", () => {
    expect(getDuplicates(testNum)).toEqual(5);
  });

  test("it should return correctly for an array that contains matching items", () => {
    expect(getDuplicates(testArr)).toEqual([1,3]);
  });

  test("it should return an empty array if no matching items", () => {
    expect(getDuplicates(testArr2)).toEqual([]);
  });
});
