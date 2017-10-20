const { concatenateArray } = require("../lib");

describe("concatenateArray", () => {
  test("Should return untouched array", () => {
    expect(concatenateArray([1,2,3])).toEqual([1,2,3]);
  });

  test("Should return the two arrays concatenated", () => {
    expect(concatenateArray([1,2,3],[4,5,6])).toEqual([1,2,3,4,5,6]);
  });

  test("Should return the three arrays concatenated together", () => {
    expect(concatenateArray([1,2,3],[4,5,6],[7,8,9,"end"])).toEqual([1,2,3,4,5,6,7,8,9,"end"]);
  });
});
