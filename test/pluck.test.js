const { pluck } = require("../lib");

describe("pluck", () => {

  test("should returns empty array if the second parameter is not an array", () => {
    expect(pluck("id", "test")).toEqual([]);
  });

  test("should plucks values at given key", () => {
    expect(pluck("id", [{id:1},{id:2},{id:3}])).toEqual([1,2,3]);
  });

  test("should return undefined if element is not pluckable", () => {
    const array = [{id:1},{id:2},{name:"John Doe"},{id:4},5];
    expect(pluck("id",array)).toEqual([1,2,undefined,4,undefined]);
  });

  test("should support sub arrays if included", () => {
    const array = [{id:1},[{id:2},{name:"John Doe"}],{id:4},5];
    expect(pluck("id",array)).toEqual([1,2,undefined,4,undefined]);
  });
});
