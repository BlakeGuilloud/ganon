const { intersection } = require("../lib");
const testArr = [1,1,1,1,1,3,1,2,3,4,1];
const testArr2 = [1,2,3,4,5,6,7,8,9,0];

describe("intersection", () => {
  test("it should return an empty array if not called with two arrays", () => {
    expect(intersection("a", 2)).toEqual([]);
    expect(intersection([], 1)).toEqual([]);
  });

  test("it should return correctly for two arrays that share elements", () => {
    expect(intersection(testArr, testArr2)).toEqual([1, 2, 3, 4]);
  });

  test("it should return an empty array if no elements occur in both arrays", () => {
    expect(intersection([1], [2])).toEqual([]);
  });
});
