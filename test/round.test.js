const { round } = require("../lib");

describe("round", () => {
  test("4.7 rounded to 5", () => {
    expect(round(4.7)).toBe(5);
  });

  test("4.4 rounded to 4", () => {
    expect(round(4.4)).toBe(4);
  });

  test("4.4 cast as a string to be rounded to 4", () => {
    expect(round("4.4")).toBe(4);
  });

  test("'test' throws an error", () => {
    expect( () => round("test")).toThrowError("Provided value must be a number.");
  });
});
