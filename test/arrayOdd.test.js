const { arrayOdd } = require("../lib");

describe("arrayOdd", () => {
  test("should be return empty array", () => {
    let input = [];
    let result = [];
    expect(arrayOdd(input)).toEqual(result);
  });

  test("should be return [ 1 3 5 7 9 ]", () => {
    let input = [1, 3, 5, 7, 9];
    let result = [1, 3, 5, 7, 9];
    expect(arrayOdd(input)).toEqual(result);
  });

  test("should be return [ 1 3 5 7 9 ] without 2 4 6 8 10", () => {
    let input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let result = [1, 3, 5, 7, 9];
    expect(arrayOdd(input)).toEqual(result);
  });

  test("should be return minus value as [ -1 1 ] without -2 0 2", () => {
    let input = [-2, -1, 0, 1, 2];
    let result = [-1, 1];
    expect(arrayOdd(input)).toEqual(result);
  });
});