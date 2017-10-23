const { is } = require("../lib");
const isObject = require("../lib/isObject");
const isPythagoreanTriple = require("../lib/isPythagoreanTriple");
const isNotNegative = require("../lib/isNotNegative");

describe("is", () => {
  test("Object returns isObject", () => {
    expect(is("Object")).toBe(isObject);
  });

  test("PythagoreanTriple returns isPythagoreanTriple", () => {
    expect(is("PythagoreanTriple")).toBe(isPythagoreanTriple);
  });

  test("NotNegative returns isNotNegative", () => {
    expect(is("NotNegative")).toBe(isNotNegative);
  });

  test("Throw error when arguments have no corresponding function", () => {
    expect(() => is("Real Life")).toThrow("Invalid Argument");
    expect(() => is("Fantasy")).toThrow("Invalid Argument");
  });

  test("Throw error when non-string types are provided to dyad", () => {
    expect(() => is(5)).toThrow("Invalid Type");
    expect(() => is(null)).toThrow("Invalid Type");
    expect(() => is(undefined)).toThrow("Invalid Type");
    expect(() => is({})).toThrow("Invalid Type");
  });
});
