const { cubeRoot } = require("../lib");

describe("cubeRoot", () => {
  test("cube root of 125 to equal 5", () => {
    expect(cubeRoot(125)).toBe(5);
  });

  test("cube root of 8 to equal 2", () => {
    expect(cubeRoot(8)).toBe(2);
  });

  test("cube root of 27000 to equal 30", () => {
    expect(cubeRoot(27000)).toBe(30);
  });

  test("Throw error on invalid type", () => {
    expect(() => cubeRoot("ten")).toThrow("Invalid Type");
    expect(() => cubeRoot(null)).toThrow("Invalid Type");
    expect(() => cubeRoot(undefined)).toThrow("Invalid Type");
    expect(() => cubeRoot({})).toThrow("Invalid Type");
  });
});
