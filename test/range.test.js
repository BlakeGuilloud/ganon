const { range } = require( "../lib" );

describe("range", () => {
  test("range(1, 1) returns [1]", () => {
    expect(range({a: 1, b: 2})).toThrow();
    expect(range("I am a banana")).toThrow();
    expect(range(4)).toThrow();
  });

  test("range(1, 2) returns [1, 2]", () => {
    expect( range(1, 2) ).toEqual([1, 2]);
  });

  test("range(5, 10) returns [5, 6, 7, 8, 9, 10]", () => {
    expect( range(5, 10) ).toEqual([5, 6, 7, 8, 9, 10]);
  });
});
