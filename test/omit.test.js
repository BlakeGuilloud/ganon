const { omit } = require("../lib");

describe("omit", () => {
  test("omit [a, b] of {a, b, c} to equal {c}", () => {
    expect(omit({
      a: "value",
      b: "value",
      c: "value"
    }, ["a", "b"])).toBe({c: "value"});
  });
});
