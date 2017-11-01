const { mapCollection } = require("../lib");

describe("mapCollection", () => {
  test("Should add each item to itself in the array", () => {
    var expectedValue = [2, 4, 6, 8, 10];
    var result = mapCollection([1, 2, 3, 4, 5], (item) => item + item);

    expect(result)
      .toEqual(expectedValue);
  });

  test("Should work with an object as the collection", () => {
    var expectedValue = {
      "John Doe": {
        first: "John",
        last: "Doe",
        full: "John Doe"
      },
      "Jane Doe": {
        first: "Jane",
        last: "Doe",
        full: "Jane Doe"
      },
      "Jack Sparrow": {
        first: "Jack",
        last: "Sparrow",
        full: "Jack Sparrow"
      }
    };
    var result = mapCollection({
      "John Doe": {
        first: "John",
        last: "Doe"
      },
      "Jane Doe": {
        first: "Jane",
        last: "Doe"
      },
      "Jack Sparrow": {
        first: "Jack",
        last: "Sparrow"
      }
    }, (item) => ({ ...item, full: item.first + " " + item.last }));

    expect(result)
      .toEqual(expectedValue);
  });
});