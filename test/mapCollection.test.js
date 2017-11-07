const { mapCollection } = require("../lib");

describe("mapCollection", () => {
  test("Should add each item to itself in the array", () => {
    let expectedValue = [2, 4, 6, 8, 10];
    let result = mapCollection([1, 2, 3, 4, 5], (item) => item + item);

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

    expect(result).toEqual(expectedValue);
    expect(mapCollection({})).toEqual({});
  });

  test("Should work with a nested object as the collection", () => {
    let expectedValue = {
      "John Doe": {
        first: "John",
        last: "Doe",
        full: "John Doe",
        health: {
          morale: 10,
          stress: 99,
          beauty: {
            ugly: false
          }
        }
      },
      "Jane Doe": {
        first: "Jane",
        last: "Doe",
        full: "Jane Doe",
        health: {
          morale: 10,
          stress: 99
        }
      },
      "Jack Sparrow": {
        first: "Jack",
        last: "Sparrow",
        full: "Jack Sparrow",
        health: {
          morale: 10,
          stress: 99
        }
      }
    };
    let result = mapCollection({
      "John Doe": {
        first: "John",
        last: "Doe",
        health: {
          morale: 10,
          stress: 99,
          beauty: {
            ugly: false
          }
        }
      },
      "Jane Doe": {
        first: "Jane",
        last: "Doe",
        health: {
          morale: 10,
          stress: 99
        }
      },
      "Jack Sparrow": {
        first: "Jack",
        last: "Sparrow",
        health: {
          morale: 10,
          stress: 99
        }
      }
    }, (item) => ({ ...item, full: item.first + " " + item.last }));

    expect(result).toEqual(expectedValue);
  });

  test("Should return a new collection", () => {
    let testArr = [1, 2, 3, 4, 5];
    let testObj = { name: "Squier Geoerge" };

    expect(mapCollection(testArr, item => item)).not.toBe(testArr);
    expect(mapCollection(testObj, item => item)).not.toBe(testObj);
    expect(mapCollection(testObj)).not.toBe(testObj);
  });

  test("Should throw if collection param is not an Array or Object", () => {
    expect(() => mapCollection(55, item => item)).toThrow();
    expect(() => mapCollection("dddd", item => item)).toThrow();
  });
});