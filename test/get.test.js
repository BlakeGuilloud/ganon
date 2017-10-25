const { get } = require( "../lib" );

describe("get", () => {
  test("returns default value when given falsey path", () => {
    const obj = {foo: "bar"};
    expect(get(obj, "baz", "hello")).toEqual("hello");
    expect(get(obj, null, "hello")).toEqual("hello");
    expect(get(obj, undefined, "hello")).toEqual("hello");
  } );

  test("returns undefined when given falsey path and no default value", () => {
    const obj = {foo: "bar"};
    expect(get(obj, "baz")).toEqual(undefined);
  });

  test("returns path value when path exists", () => {
    const obj = {foo: "bar"};
    expect(get(obj, "foo", "hello")).toEqual("bar");
  } );
} );
