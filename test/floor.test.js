const { floor } = require("../lib");

describe("floor", () => {
  test("number 45.95 floored equals 45", () => {
    expect(floor(45.95)).toBe(45);
  });

  test("number 45.05 floored equals 45", () => {
    expect(floor(45.05)).toBe(45);
  });

  test("number 4 floored equals 4", () => {
    expect(floor(4)).toBe(4);
  });

  test("number -45.05 floored equals -46", () => {
    expect(floor(-45.05)).toBe(-46);
  });

  test("number -45.95 floored equals -46", () => {
    expect(floor(-45.95)).toBe(-46);
  });
});
