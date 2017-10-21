const { toOrdinalNumber } = require("../lib");
const invalidValueErr = "Provided value must be a positive integer.";

describe("toOrdinalNumber", () => {
  it("should fail for non positive integer values", () => {
    expect(() => toOrdinalNumber([1])).toThrow(invalidValueErr);
    expect(() => toOrdinalNumber({})).toThrow(invalidValueErr);
    expect(() => toOrdinalNumber(-6)).toThrow(invalidValueErr);
    expect(() => toOrdinalNumber("hello")).toThrow(invalidValueErr);
    expect(() => toOrdinalNumber("-5")).toThrow(invalidValueErr);
  });

  it("should pass for valid values", () => {
    expect(toOrdinalNumber(1)).toEqual("1st");
    expect(toOrdinalNumber(2)).toEqual("2nd");
    expect(toOrdinalNumber(3)).toEqual("3rd");
    expect(toOrdinalNumber(4)).toEqual("4th");
    expect(toOrdinalNumber(11)).toEqual("11th");
    expect(toOrdinalNumber(12)).toEqual("12th");
    expect(toOrdinalNumber(13)).toEqual("13th");
    expect(toOrdinalNumber(19)).toEqual("19th");
    expect(toOrdinalNumber(102)).toEqual("102nd");
    expect(toOrdinalNumber("5")).toEqual("5th");
  });
});