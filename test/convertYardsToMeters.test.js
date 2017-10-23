const { convertYardsToMeters } = require("../lib");

describe("convertYardsToMeters", () => {
  test("One yard is 0.9144 meters", () => {
    expect(convertYardsToMeters(1)).toBe(0.9144);
  });

  test("2 yards is 1.8288 meters", () => {
    expect(convertYardsToMeters(2)).toBe(1.8288);
  });

  test("0 yards is 0 meters", () => {
    expect(convertYardsToMeters(0)).toBe(0);
  });

  test("-1 yards is -0.9144 meters", () => {
    expect(convertYardsToMeters(-1)).toBe(-0.9144);
  });

  test("Throw error on invalid type", () => {
    expect(() => convertYardsToMeters("a yard")).toThrow("Invalid Type");
    expect(() => convertYardsToMeters(null)).toThrow("Invalid Type");
    expect(() => convertYardsToMeters(undefined)).toThrow("Invalid Type");
    expect(() => convertYardsToMeters({})).toThrow("Invalid Type");
  });
});
