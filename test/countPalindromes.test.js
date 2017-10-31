const { countPalindromes } = require("../lib");

describe("countPalindromes", () => {

  it("should return 0 if no palindromes in string", () => {
    const str = "crayon";

    const actual = countPalindromes(str);
    expect(actual).toBe(0);
  });

  it("should return correct palindrome count for all palindromes in str which is itself a palindrome", () => {
    const str = "tacocat";

    const actual = countPalindromes(str);
    expect(actual).toBe(3);
  });

  it("should return correct palindrome count for a string containing palindromes which is not itself a palindrome", () => {
    const str = "titillating";

    const actual = countPalindromes(str);
    expect(actual).toBe(2);
  });
});
