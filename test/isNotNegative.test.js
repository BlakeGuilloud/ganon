const { isNotNegative } = require("../lib");
const notNumErr = "n is not type Number";

describe("isNotNegative", () => {
  test("should fail with non Numbers", () => {
    expect(() => isNotNegative([-2,18])).toThrow(notNumErr);
    expect(() => isNotNegative(true)).toThrow(notNumErr);
    expect(() => isNotNegative("bar")).toThrow(notNumErr);
    expect(() => isNotNegative({})).toThrow(notNumErr);
    expect(() => isNotNegative(Infinity)).toThrow(notNumErr);
  });

  test("-1 is negative", () => {
    expect(isNotNegative(-1)).toEqual(false);
  });

  test("0 is not negative", () => {
    expect(isNotNegative(0)).toEqual(true);
  });

  test("16 is not negative", () => {
    expect(isNotNegative(16)).toEqual(true);
  });

});
