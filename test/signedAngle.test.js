const { signedAngle } = require("../lib");

describe("signedAngle", () => {
  test("signedAngle(41)", () => {
    expect(signedAngle(41)).toBe(41);
  });

  test("signedAngle(181)", () => {
    expect(signedAngle(181)).toBe(-179);
  });

  test("signedAngle(360)", () => {
    expect(signedAngle(360)).toBe(0);
  });

  test("signedAngle(-3601)", () => {
    expect(signedAngle(-3601)).toBe(-1);
  });
});
