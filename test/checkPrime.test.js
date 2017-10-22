const { checkPrime } = require("../lib");

describe("checkPrime", () => {
  it("returns true if the argument is a prime number", () => {
    const num = 5;
    expect(checkPrime(num)).toEqual(true);
  });

  it("does not mutate the input number", () => {
    const num = 10;
    expect(checkPrime(num)).toEqual(false);
  });

  it("throws an error if the argument is not an integer", () => {
    expect(() => checkPrime(1.0).toThrow());
  });

});
