const { merge } = require("../lib");

describe("merge", () => {
  test("returns an empty object given invalid values", () => {
    expect(merge(0)).toEqual({});
    expect(merge("1")).toEqual({});
    expect(merge([])).toEqual({});
  });

  test("returns an empty object given an empty object", () => {
    expect(merge({})).toEqual({});
    expect(merge({}, {})).toEqual({});
  });

  test("returns a new object when given one", () => {
    const obj = {foo: "bar"};
    expect(merge(obj)).not.toBe(obj);
  });

  test("returns a merged object when given two", () => {
    const obj1 = {foo: "foo"};
    const obj2 = {bar: "bar"};
    const expected = {foo: "foo", bar: "bar"};
    expect(merge(obj1, obj2)).toEqual(expected);
  });

  test("returns a merged object when given three", () => {
    const obj1 = {foo: "foo"};
    const obj2 = {bar: "bar"};
    const obj3 = {baz: "baz"};
    const expected = {foo: "foo", bar: "bar", baz: "baz"};
    expect(merge(obj1, obj2, obj3)).toEqual(expected);
  });

  test("skips non-Object arguments", () => {
    const obj1 = {foo: "foo"};
    const obj2 = {bar: "bar"};
    const expected = {foo: "foo", bar: "bar"};
    expect(merge(obj1, 123, "123", obj2)).toEqual(expected);
  });

  test("uses the values of later objects", () => {
    const obj1 = {foo: "foo"};
    const obj2 = {foo: "bar"};
    const obj3 = {foo: "baz"};
    const expected = {foo: "baz"};
    expect(merge(obj1, obj2, obj3)).toEqual(expected);
  });
});
