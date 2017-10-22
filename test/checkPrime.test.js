const { checkPrime } = require("../lib");

describe("checkPrime", () => {
  it("returns true if the argument is a prime number", () => {
    const num = 5;
    expect(checkPrime(num)).toEqual(true);
  });

  it("returns false if the argument is not a prime number", () => {
    const num = 10;
    expect(checkPrime(num)).toEqual(false);
  });

  it("does not mutate the input number", () => {
    const num = 10;
    checkPrime(num);
    expect(num).toEqual(10);
  });

  it("throws an error if the argument is not an integer (float)", () => {
    expect(() => checkPrime(1.0).toThrow());
  });

  it("throws an error if the argument is not an integer (string)", () => {
    expect(() => checkPrime("1").toThrow());
  });

});
