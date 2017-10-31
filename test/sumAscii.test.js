const { sumAscii } = require("../lib");

describe("surfaceAreaOfSphere", () => {
  test("sum of string '       ' is 224", () => {
    expect(sumAscii("       ")).toBe(224);
  });

  test("sum of string 'V@^^EBHsgegerYH%he09' is 1690", () => {
    expect(sumAscii("V@^^EBHsgegerYH%he09")).toBe(1690);
  });

  test("sum of string 'Foo' is 292", () => {
    expect(sumAscii("Foo")).toBe(292);
  });

  test("sum of string with length 0 is 0", () => {
    expect(sumAscii("")).toBe(0);
  });
});
