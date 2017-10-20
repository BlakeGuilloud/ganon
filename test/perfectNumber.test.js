const { perfectNumber } = require("../lib");

describe("perfectNumber", () => {
  test("Number 6 is perfect", () => {
    expect(perfectNumber(6)).toBe(true);
  });

  test("Number 1 is not perfect", () => {
    expect(perfectNumber(1)).toBe(false);
  });

  test("Number 2 is not perfect", () => {
    expect(perfectNumber(2)).toBe(false);
  });

  test("Number 28 is perfect", () => {
    expect(perfectNumber(28)).toBe(true);
  });

  test("Number 496 is perfect", () => {
    expect(perfectNumber(496)).toBe(true);
  });

  test("Number 99999 is not perfect", () => {
    expect(perfectNumber(99999)).toBe(false);
  });

  test("Number 8589869056 is perfect", () => {
    expect(perfectNumber(8589869056)).toBe(true);
  });

  test("Number 8589869057 is not perfect", () => {
    expect(perfectNumber(8589869057)).toBe(false);
  });
});