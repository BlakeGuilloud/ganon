const { select } = require("../lib");

describe("select", () => {
  const data = {
    foo: "foo",
    bar: "bar",
    baz: "baz",
    0: "0",
    1: "1",
  };

  test("returns an empty object when given no keys", () => {
    expect(select([], data)).toEqual({});
  });

  test("throws if the first argument provided is not an instance of Array", () => {
    const invalidFirstArgument = function() {
      select(null, data);
    };
    expect(invalidFirstArgument).toThrowError(TypeError);
    expect(invalidFirstArgument).toThrowError(/first argument/);
  });

  test("throws if the second argument provided is not of the Object datatype", () => {
    const invalidSecondArgument = function() {
      select([], 1);
    };
    expect(invalidSecondArgument).toThrowError(TypeError);
    expect(invalidSecondArgument).toThrowError(/second argument/);
  });

  test("returns a new object", () => {
    expect(select(["foo", "bar", "baz", 0, 1], data)).not.toBe(data);
  });

  test("returns an object with selected keys", () => {
    expect(select(["foo", "baz"], data)).toEqual({foo: "foo", baz: "baz"});
  });

  test("ignores keys without values", () => {
    expect(select(["foo", "baz", "bun"], data)).toEqual({foo: "foo", baz: "baz"});
  });
});
