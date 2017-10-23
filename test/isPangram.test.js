const {isPangram} = require("../lib");

describe("isPangram", () => {
  test("the quick brown fox jumps over the lazy dog", () => {
    expect(isPangram("the quick brown fox jumps over the lazy dog")).toBe(true);
  });
  test("tHe QuIck browN fOx JuMps OVer tHe Lazy Dog", () => {
    expect(isPangram("tHe QuIck browN fOx JuMps OVer tHe Lazy Dog")).toBe(true);
  });
  test("tHe QuIck browN fOx JuMps OVer tHe Lazy Dog", () => {
    expect(isPangram("Just checking to see if you're paying attention")).toBe(false);
  });
  test("The five boxing wizards jump quickly", () => {
    expect(isPangram("The five boxing wizards jump quickly")).toBe(true);
  });
});