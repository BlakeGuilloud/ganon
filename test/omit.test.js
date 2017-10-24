const { omit } = require("../lib");

describe("omit", () => {
  test("omit [a, b] of {a, b, c} to equal {c}", () => {
    expect(omit({
      a: "value",
      b: "value",
      c: "value"
    }, ["a", "b"])).toEqual({c: "value"});
  });

  test("omit [b, c] of {a, b, c} to equal {a}", () => {
    expect(omit({
      a: "value",
      b: "value",
      c: "value"
    }, ["b", "c"])).toEqual({a: "value"});
  });

  test("omit [d, c] of {a, b, c} to equal {a, b}", () => {
    expect(omit({
      a: "value",
      b: "value",
      c: "value"
    }, ["d", "c"])).toEqual({a: "value", b: "value"});
  });
});
