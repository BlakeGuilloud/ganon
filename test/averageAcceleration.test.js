const { averageAcceleration } = require("../lib");

describe("averageAcceleration", () => {
  test("The average acceleration with initial velocity 1 m/s, final velocity 2 m/s, initial time 3 seconds, final time 4 seconds to equal 1 m/s^2", () => {
    expect(averageAcceleration(1,2,3,4)).toBeCloseTo(1);
  });

  test("The average acceleration with initial velocity 10 m/s, final velocity 25 m/s, initial time 12 seconds, final time 27 seconds to equal 1 m/s^2", () => {
    expect(averageAcceleration(10,25,12,27)).toBeCloseTo(1);
  });

  test("The average acceleration with initial velocity 10 m/s, final velocity 15 m/s, initial time 8 seconds, final time 15 seconds to equal 0.71429 m/s^2", () => {
    expect(averageAcceleration(10,15,8,15)).toBeCloseTo(0.71429);
  });

  test("The average acceleration with initial velocity 85 m/s, final velocity 125 m/s, initial time 0 seconds, final time 15 seconds to equal 2.66667 m/s^2", () => {
    expect(averageAcceleration(85,125,0,15)).toBeCloseTo(2.66667);
  });

  test("The average acceleration with initial velocity 2345 m/s,final velocity 5678 m/s, initial time 123 seconds, final time 456 seconds to equal 10.00901 m/s^2", () => {
    expect(averageAcceleration(2345,5678,123,456)).toBeCloseTo(10.00901);
  });
});
