const { groupBy } = require("../lib");

describe("groupBy", () => {
  test("Groups types as per test function", () => {
    expect(() => {
      groupBy(["Fizz", "Buzz", 1, 2, 5.5], function(el) {
        return typeof el;
      }).toEqual({
        number: [1, 2, 5.5],
        string: ["Fizz", "Buzz"]
      });
    });
  });

  test("Groups numbers as per test function", () => {
    expect(() => {
      groupBy([1.2, 1.8, 3.5, 2.4, 1.3, 3.7], Math.floor).toEqual({
        1: [1.2, 1.8, 1.3],
        2: [2.4],
        3: [3.5, 3.7]
      });
    });
  });
});
