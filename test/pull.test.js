const { pull } = require("../lib");
const invalidValueArr = "Provided value must be an array";

describe("pull", () => {
  test("pull [2, 4, 7] from [1, 2, 4, 6, 7] should equal to [1, 6]", () => {

    expect(pull([1, 2, 4, 6, 7], [2, 4, 7])).toEqual([1, 6]);
  });

  test("pull 2, 7 from [23, 10, 2, 7] should equal to [23, 10]", () => {

    expect(pull([23, 10, 2, 7], 2, 7)).toEqual([23, 10]);
  });

  test("pull \"cat\" from [\"cat\", \"fish\", \"dog\", \"cat\"] should equal to [\"fish\", \"dog\"]", () => {

    expect(pull(["cat", "fish", "dog", "cat"], "cat")).toEqual(["fish", "dog"]);
  });

  test("pull 4 from [] should equal to []", () => {

    expect(pull([], 4)).toEqual([]);
  });

  test("pull \"hey\" from {a: 67, b: \"dog\"} should throw invalidValueArr", () => {

    expect(() => pull({a: 67, b: "dog"}, "hey")).toThrow(invalidValueArr);
  });

  test("pull 24 from 52 should throw invalidValueArr", () => {

    expect(() => pull(52, 24)).toThrow(invalidValueArr);
  });

  test("pull 2 from \"fish\" should throw invalidValueArr", () => {

    expect(() => pull("fish", 2).toThrow(invalidValueArr));
  });

});
