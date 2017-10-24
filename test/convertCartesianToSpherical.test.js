const { convertCartesianToSpherical } = require("../lib");

describe("convertCartesianToSpherical", () => {
  test("Cartesian([2,3,4]) will be Spherical([5.38516,56.30993,42.03111])", () => {
    expect(convertCartesianToSpherical([2,3,4])).toEqual([5.3852,56.3099,42.0311]);
  });
  test("Cartesian([4,4,4]) will be Spherical([6.92820,45.0000,54.7356])", () => {
    expect(convertCartesianToSpherical([4,4,4])).toEqual([6.9282,45.0000,54.7356]);
  });
});
