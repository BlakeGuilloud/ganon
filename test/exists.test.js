const { exists } = require("../lib");

describe("exists", () => {
  it("should return false for NaN, null, and undefined", () => {
    expect(exists(NaN)).toBe(false);
    expect(exists(undefined)).toBe(false);
    expect(exists(null)).toBe(false);
  });

  it("should return true for falsy values that contain data", () => {
    expect(exists(false)).toBe(true);
    expect(exists("")).toBe(true);
    expect(exists(0)).toBe(true);
    expect(exists(-400)).toBe(true);
  });

  it("should return true for strings, numbers, and booleans", () => {
    expect(exists(true)).toBe(true);
    expect(exists(" ")).toBe(true);
    expect(exists("Aliens exist!")).toBe(true);
    expect(exists(123)).toBe(true);
  });

  it("should return true for objects and arrays", () => {
    expect(exists({})).toBe(true);
    expect(exists([])).toBe(true);
    expect(exists({ registered: true, name: null })).toBe(true);
    expect(exists([1, 2, { month: "October" }])).toBe(true);
  });
});
