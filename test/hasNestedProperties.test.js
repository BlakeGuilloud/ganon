const { hasNestedProperties } = require("../lib");

describe("hasNestedProperties", () => {
  test("hasNestedProperties returns true when it has nested properties", () => {
    expect(hasNestedProperties({ a: { aa: "aa", ab: "ab" }, b: "b" }));
  });

  test("hasNestedProperties returns false when it does not have nested properties", () => {
    expect(hasNestedProperties({ a: "a", b: "b" })).toBe(false);
  });

  test("hasNestedProperties returns false when it's an empty object", () => {
    expect(hasNestedProperties({})).toBe(false);
  });
});