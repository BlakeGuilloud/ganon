const { fizzBuzz } = require("../lib");

describe("fizzBuzz", () => {
  test("Non-multiple of 3 or 5 return the number", () => {
    for (var i = 0; i < 100; i++) {
      if (i % 3 != 0 && i % 5 != 0)
        expect(fizzBuzz(i)).toBe(i);
    }
  });

  test("Number 9 is Multiple of only 3 returns 'Fizz'", () => {
    expect(fizzBuzz(9)).toBe("Fizz");
  });

  test("Number 10 is Multiple of only 3 returns 'Buzz'", () => {
    expect(fizzBuzz(10)).toBe("Buzz");
  });

  test("Number 15 is Multiple of 3 and 5 returns 'FizzBuzz'", () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
  });

  test("Number 180 is Multiple of 3 and 5 returns 'FizzBuzz'", () => {
    expect(fizzBuzz(180)).toBe("FizzBuzz");
  });
});
