const { countWordFrequency } = require("../lib");

describe("countWordFrequency", () => {
  test("no of words in \"Hello world\" is 1", () => {
    expect(countWordFrequency("Hello world","hello")).toBe(1);
  });

  test("no of words in \"Hello world\" is 2", () => {
    expect(countWordFrequency("Hello world","hello","world")).toBe(2);
  });

  test("no of words \"pop\" in \"Lolly Pop loves Pop music\" is 1", () => {
    expect(countWordFrequency("Lolly Pop loves Pop music",["pop"])).toBe(2);

  });
  test("no of numbers \"1\" in \"Lolly Pop loves Pop music\" is 0", () => {
    expect(countWordFrequency("Lolly Pop loves Pop music",[1])).toBe(0);
  });
});
