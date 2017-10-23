const { convert } = require("../lib");
const convertInchesToFeet = require("../lib/convertInchesToFeet");
const convertFeetToInches = require("../lib/convertFeetToInches");
const convertStringToBinary = require("../lib/convertStringToBinary");

describe("convert", () => {
  test("Inches and Feet returns convertInchesToFeet", () => {
    expect(convert("Inches","Feet")).toBe(convertInchesToFeet);
  });

  test("Feet and Inches returns convertFeetToInches", () => {
    expect(convert("Feet","Inches")).toBe(convertFeetToInches);
  });

  test("String and Binary returns convertStringToBinary", () => {
    expect(convert("String","Binary")).toBe(convertStringToBinary);
  });

  test("Throw error when arguments have no corresponding function", () => {
    expect(() => convert("News", "Fakes News")).toThrow("Invalid Argument");
    expect(() => convert("Feet", "Hamburger")).toThrow("Invalid Argument");
    expect(() => convert("Hot Dog", "Inches")).toThrow("Invalid Argument");
  });

  test("Throw error when non-string types are provided to dyad", () => {
    expect(() => convert(5,"Feet")).toThrow("Invalid Type");
    expect(() => convert(null,"Feet")).toThrow("Invalid Type");
    expect(() => convert("Feet", undefined)).toThrow("Invalid Type");
    expect(() => convert("Inches", {})).toThrow("Invalid Type");
  });
});
