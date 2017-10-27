const { scientificNotation } = require("../lib");

describe("scientificNotation (all valid inputs, positive index)", () => {
  test("3 in scientific notation, no sig figs specified", () => {
    expect(scientificNotation(3)).toBe("3 x 10<sup>0</sup>");
  });

  test("3 in scientific notation, 5 sig figs", () => {
    expect(scientificNotation(3, 5)).toBe("3.0000 x 10<sup>0</sup>");
  });

  test("3214.567 in scientific notation, 2 sig figs", () => {
    expect(scientificNotation(3214.567, 2)).toBe("3.2 x 10<sup>3</sup>");
  });
});

describe("scientificNotation (all valid inputs, negative index)", () => {
  test("0.8 in scientific notation, no sig figs specified", () => {
    expect(scientificNotation(0.8)).toBe("8 x 10<sup>-1</sup>");
  });

  test("-0.000437642469000000 in scientific notation, 11 sig figs", () => {
    expect(scientificNotation(-0.000437642469000000, 11)).toBe("-4.3764246900 x 10<sup>-4</sup>");
  });

  test("0.01 in scientific notation, 5 sig figs", () => {
    expect(scientificNotation(0.01, 5)).toBe("1.0000 x 10<sup>-2</sup>");
  });
});

describe("scientificNotation (invalid input, throws errors)", () => {
  test("number in scientific notation, sig figs specified as string", () => {
    expect(() => scientificNotation(523,"like, just so many man")).toThrow();
  });

  test("number in scientific notation, sig figs specified as object", () => {
    expect(() => scientificNotation(523,{})).toThrow();
  });

  test("number in scientific notation, sig figs specified as NaN", () => {
    expect(() => scientificNotation(523,NaN)).toThrow();
  });

  test("number in scientific notation, sig figs specified as Infinity", () => {
    expect(() => scientificNotation(523,Infinity)).toThrow();
  });

  test("string in scientific notation, sig figs specified as number", () => {
    expect(() => scientificNotation("523", 2)).toThrow();
  });

  test("object in scientific notation, sig figs specified as number", () => {
    expect(() => scientificNotation({}, 2)).toThrow();
  });

  test("NaN in scientific notation, sig figs specified as number", () => {
    expect(() => scientificNotation(NaN, 2)).toThrow();
  });

  test("Infinity in scientific notation, sig figs specified as number", () => {
    expect(() => scientificNotation(Infinity, 2)).toThrow();
  });

  test("undefined in scientific notation, sig figs specified as number", () => {
    expect(() => scientificNotation(undefined, 2)).toThrow();
  });

  test("null in scientific notation, sig figs specified as number", () => {
    expect(() => scientificNotation(undefined, 2)).toThrow();
  });
});
