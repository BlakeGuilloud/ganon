const { log } = require("../lib");

describe("log", () => {
  test("Natural log of 1 is 0", () => {
    expect(log(1)).toBe(0);
  });

  test("Natural log of 10 is 2.302585092994046", () => {
    expect(log(10)).toBe(2.302585092994046);
  });
});
