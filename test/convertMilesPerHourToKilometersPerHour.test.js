import {convertMilesPerHourToKilometersPerHour} from "../lib";

describe("convertMilesPerHourToKilometersPerHour", () => {

  test("should return the kilometers per hour", () => {
    expect(convertMilesPerHourToKilometersPerHour(75)).toBeCloseTo(121);
  });

  test("should throw an error if called with incorrect params", () => {
    expect(() => convertMilesPerHourToKilometersPerHour()).toThrow();
    expect(() => convertMilesPerHourToKilometersPerHour("75")).toThrow();
    expect(() => convertMilesPerHourToKilometersPerHour([90])).toThrow();
    expect(() => convertMilesPerHourToKilometersPerHour(undefined)).toThrow();
    expect(() => convertMilesPerHourToKilometersPerHour(null)).toThrow();
    expect(() => convertMilesPerHourToKilometersPerHour(-10)).toThrow();
  });
});