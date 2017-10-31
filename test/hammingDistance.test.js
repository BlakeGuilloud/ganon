const { hammingDistance } = require("../lib");

describe("hammingDistance", () => {
  test("Hamming Distance between \"aba\" and \"aab\" is 2", () => {
    expect(hammingDistance("aba", "aab")).toBe(2);
  });

  test("Hamming Distance between \"aba\" and \"aba\" is 0", () => {
    expect(hammingDistance("aba", "aba")).toBe(0);
  });

  test("Throw error on invalid type", () => {
    expect(() => hammingDistance(1, "one")).toThrow("Invalid Type");
    expect(() => hammingDistance(1, [3])).toThrow("Invalid Type");
    expect(() => hammingDistance(1, null)).toThrow("Invalid Type");
    expect(() => hammingDistance(1, undefined)).toThrow("Invalid Type");
  });

  test("Throw error on length mismatch", () => {
    expect(() => hammingDistance("ab", "aba")).toThrow("String lengths don't match");
    expect(() => hammingDistance("aba", "ab")).toThrow("String lengths don't match");
  });
});
