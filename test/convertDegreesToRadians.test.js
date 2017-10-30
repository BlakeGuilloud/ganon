const { convertDegreesToRadians } = require("../lib");

describe("convertDegreesToRadians", () => {
  test("0 degrees is 0 radians", () => {
    expect(convertDegreesToRadians(0)).toBe(0);
  });

  test("1 degrees is 0.01745329252 radians", () => {
    expect(convertDegreesToRadians(1)).toBeCloseTo(0.01745329252, 1);
  });

  test("3 degrees is 0.22689280276 radians", () => {
    expect(convertDegreesToRadians(3)).toBeCloseTo(0.05235987756, 1);
  });

  test("66 degrees is 1.1519173063 radians", () => {
    expect(convertDegreesToRadians(66)).toBeCloseTo(1.1519173063, 1);
  });

  test("66.123 degrees is 1.1540710426 radians", () => {
    expect(convertDegreesToRadians(66.1234)).toBeCloseTo(1.1540710426, 1);
  });

  test("360 degrees is 6.2831853072 radians", () => {
    expect(convertDegreesToRadians(360)).toBeCloseTo(6.2831853072, 1);
  });

  test("720 degrees is 12.566370614 radians", () => {
    expect(convertDegreesToRadians(720)).toBeCloseTo(12.566370614, 1);
  });

  test("check illegal argument types thow error", () => {
    expect(() => convertDegreesToRadians(null)).toThrow();
    expect(() => convertDegreesToRadians(true)).toThrow();
    expect(() => convertDegreesToRadians(undefined)).toThrow();
    expect(() => convertDegreesToRadians("4.5")).toThrow();
    expect(() => convertDegreesToRadians(-2)).toThrow();
  });
});
