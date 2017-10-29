const { isHeterogram } = require("../lib");

describe("isHeterogram", () => {
  test("expect heterograms to be true", () => {
    expect(isHeterogram("caperingly")).toBe(true);
    expect(isHeterogram("lacqueying")).toBe(true);
    expect(isHeterogram("taperingly")).toBe(true);
    expect(isHeterogram("dumbwaiter")).toBe(true);
    expect(isHeterogram("isogram")).toBe(true);
  });

  test("expect other strings to be false", () => {
    expect(isHeterogram("Mi mama me mima")).toBe(false);
    expect(
      isHeterogram("profesora petra perez pide palabras por p a pepito")
    ).toBe(false);
    expect(isHeterogram("apple")).toBe(false);
  });

  test("It should ignore withespaces", () => {
    expect(isHeterogram("Lampez un fort whisky")).toBe(true);
    expect(isHeterogram("Plombez\nvingt\nfuyards")).toBe(true);
    expect(isHeterogram("The big\tdwarf\tonly\tjumps")).toBe(true);
  });

  test("Test to check undefined conditions", () => {
    expect(isHeterogram(undefined)).toBe(undefined);
    expect(isHeterogram([])).toBe(undefined);
    expect(isHeterogram(null)).toBe(undefined);
  });
});
