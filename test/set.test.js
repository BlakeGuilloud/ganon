const { set } = require("../lib");

const obj = {
  a: { b: { c: { value: 123 }}},
  value: 234,
};

describe("set", () => {
  test("Set a value at an existing path", () => {
    expect(set(obj, "a.b.c.value", 1337)).toMatchObject({
      a: { b: { c: { value: 1337 }}}
    });
  });

  test("Set a value at an unexisting path", () => {
    expect(set(obj, "hello.world", 42)).toMatchObject({
      hello: { world: 42 },
    });
  });

  test("Set a value on an undefined object", () => {
    expect(set(null, "a.path", "value")).toBeFalsy();
    expect(set(undefined, "a.path", "value")).toBeFalsy();
  });

  test("Set a value with an array path", () => {
    expect(set(obj, ["a", "b", "d"], "kitties are the best")).toMatchObject({
      a: { b: { d: "kitties are the best" }},
    });
  });

  test("Set a value with an invalid path", () => {
    expect(() => set(obj, 42, 1337)).toThrow("Path should be a string or array");
  });
});
