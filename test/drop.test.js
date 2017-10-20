const { drop } = require("../lib");

describe("drop", () => {
  test("Should return whole array if count is zero", () => {
    expect(drop([1,2,3],0)).toEqual([1,2,3]);
  });

  test("Should return without first N elements if array length is >= N", () => {
    expect(drop([1,2,3],2)).toEqual([3]);
  });

  test("Should return empty array if array length is < N", () => {
    expect(drop([1,2,3],13)).toEqual([]);
  });
});
