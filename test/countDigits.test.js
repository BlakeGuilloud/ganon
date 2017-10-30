const { countDigits } = require("../lib");

describe("countDigits", () => {

  it("should return 0 if no digits in str", () => {
    const str = "Hello, World!";

    const actual = countDigits(str);
    expect(actual).toBe(0);
  });

  it("should return correct digit count for all digits in str", () => {
    const str = "512346";

    const actual = countDigits(str);
    expect(actual).toBe(6);
  });

  it("should return correct digit count for mixed content in str", () => {
    const str = "The answer is 42, but 0 people know the question";

    const actual = countDigits(str);
    expect(actual).toBe(3);
  });
});
