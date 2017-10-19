const { sign } = require("../lib");

describe("sign", () => {
  test("Sign of a negative number should be -1", () => {
    expect(sign(-123)).toBe(-1);
  });

  test("Sign of a positive number should be 1", () => {
    expect(sign(123)).toBe(1);
  });

  test("Sign of a NaN should be NaN", () => {
    expect(sign(NaN)).toBeFalsy();
  });
});
