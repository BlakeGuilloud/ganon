const { arrayOdd } = require("../lib");

describe("arrayOdd", () => {
  test("should be return empty array", () => {
    let input = [];
    let result = [];
    expect(arrayOdd(input)).toEqual(result);
  });

  test("should be return [ 2 4 6 8 10 ]", () => {
    let input = [2, 4, 6, 8, 10];
    let result = [2, 4, 6, 8, 10];
    expect(arrayOdd(input)).toEqual(result);
  });

  test("should be return [ 2 4 6 8 10 ] without 1 3 5 7 9", () => {
    let input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let result = [2, 4, 6, 8, 10];
    expect(arrayOdd(input)).toEqual(result);
  });

  test("should be return minus value as [ -2 0 2 ] without -1 1", () => {
    let input = [-2, -1, 0, 1, 2];
    let result = [-2, 0, 2];
    expect(arrayOdd(input)).toEqual(result);
  });
});