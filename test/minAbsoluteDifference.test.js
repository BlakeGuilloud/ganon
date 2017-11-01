const { minAbsoluteDifference } = require("../lib");

const testData1 = [-10, 11, 35, -1, 5];
const testData2 = [0, 0, 0];
const testData3 = [-11, -13, -21];

describe("minAbsoluteDifference", () => {
  test("Simple test", () => {
    expect(
      minAbsoluteDifference(testData1)).toEqual(6);
  });
  test("Zero array test", () => {
    expect(
      minAbsoluteDifference(testData2)).toEqual(0);
  });
  test("Negative array test", () => {
    expect(
      minAbsoluteDifference(testData3)).toEqual(2);
  });
});

