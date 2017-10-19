const { flattenArray } = require( "../lib" );

describe("flattenArray", () => {
  test("flattenArray on empty array returns empty array", () => {
    expect( flattenArray([]) ).toBe([]);
  });

  test("flattenArray on already flat array returns the same array", () => {
    expect( flattenArray([0, 1, 2, 3, 4, 5]) ).toBe([0, 1, 2, 3, 4, 5]);
  });

  test( "flattenArray on nested array returns flat array", () => {
    expect( flattenArray([[0, 1], [2, 3], [4, 5]]) ).toBe([0, 1, 2, 3, 4, 5]);
  });
});
