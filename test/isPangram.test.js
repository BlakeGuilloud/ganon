const {isPangram} = require("../lib");

describe("isPangram", () => {
  describe("isPangram should return true", () => {
    test("the quick brown fox jumps over the lazy dog", () => {
      expect(isPangram("the quick brown fox jumps over the lazy dog")).toBe(true);
    });
    test("tHe QuIck browN fOx JuMps OVer tHe Lazy Dog", () => {
      expect(isPangram("tHe QuIck browN fOx JuMps OVer tHe Lazy Dog")).toBe(true);
    });
    test("How vexingly quick daft zebras jump!", () => {
      expect(isPangram("How vexingly quick daft zebras jump!")).toBe(true);
    });
    test("The five boxing wizards jump quickly", () => {
      expect(isPangram("The five boxing wizards jump quickly")).toBe(true);
    });
  });

  describe("isPangram should return false", () => {
    test("When in Rome, do as the Romans.", () => {
      expect(isPangram("When in Rome, do as the Romans.")).toBe(false);
    });
    test("People who live in glass houses should not throw stones.", () => {
      expect(isPangram("People who live in glass houses should not throw stones.")).toBe(false);
    });
  });
});
