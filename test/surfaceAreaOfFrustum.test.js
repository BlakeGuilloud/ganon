const { surfaceAreaOfFrustum } = require("../lib");

describe("surfaceAreaOfFrustum", () => {
  test("surface area of frustum with r1 = 5, r2 = 10 and height = 15 is 1137.793202", () => {
    expect(surfaceAreaOfFrustum(5, 10, 15)).toBeCloseTo(1137.793202, 4);
  });

  test("surface area of frustum with radius 25, 45 and height 15 is 13823.007676 and 5497.787144 for total and lateral respectively", () => {
    expect(surfaceAreaOfFrustum(25, 45, 15, "total")).toBeCloseTo(13823.007676, 4);
    expect(surfaceAreaOfFrustum(25, 45, 15, "lateral")).toBeCloseTo(5497.787144, 4);
  });

  test("surface area of frustum with radius 10, 20 and height 0 is 2513.274123 and 942.477796 for total and lateral respectively", () => {
    expect(surfaceAreaOfFrustum(10, 20, 0)).toBeCloseTo(2513.274123, 4);
    expect(surfaceAreaOfFrustum(10, 20, 0, "lateral")).toBeCloseTo(942.477796, 4);
  });

  test("should throw exception if input args less than 3 or negative or optional param given is wrong", () => {
    expect(() => surfaceAreaOfFrustum(-5))
      .toThrow();
    expect(() => surfaceAreaOfFrustum(-5, 45))
      .toThrow();
    expect(() => surfaceAreaOfFrustum(5, 5, -15))
      .toThrow();
    expect(() => surfaceAreaOfFrustum(5, 5, 15, "volume"))
      .toThrow();
  });

});
