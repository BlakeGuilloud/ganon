const { shuffle } = require("../lib");

describe("shuffle", () => {
  it("should shuffle array elements", () => {
    const input = [5, 12, 54, 75, 76, 53];

    const output = shuffle(input);

    const hasAllElements = input.length === output.length;

    expect(hasAllElements).toBe(true);

    const allElementsPresent = output.every(el => input.includes(el));

    expect(allElementsPresent).toBe(true);

    const someElementsChanged = output.some(
      (el, index) => index !== input.indexOf(el)
    );

    expect(someElementsChanged).toBe(true);
  });

  it("should shuffle string elements", () => {
    const input = "bharat".split("");

    const output = shuffle(input).split("");

    const hasAllElements = input.length === output.length;

    expect(hasAllElements).toBe(true);

    const allElementsPresent = output.every(el => input.includes(el));

    expect(allElementsPresent).toBe(true);

    const someElementsChanged = output.some(
      (el, index) => index !== input.indexOf(el)
    );

    expect(someElementsChanged).toBe(true);
  });
});
