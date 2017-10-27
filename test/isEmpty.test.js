const { isEmpty } = require("../lib");

describe("isEmpty", () => {
  test("Empty array should be true", () => {
    expect(isEmpty([])).toEqual(true);
  });

  test("Empty object should be true", () => {
    expect(isEmpty({})).toEqual(true);
  });

  test("Non empty array should return false", () => {
    expect(isEmpty([1, 2, 3])).toEqual(false);
    expect(isEmpty(["not empty"])).toEqual(false);
    expect(isEmpty([[]])).toEqual(false);
    expect(isEmpty([{}])).toEqual(false);
  });

  test("Non empty object should return false", () => {
    expect(isEmpty({"key": "value"})).toEqual(false);
    expect(isEmpty({"status": "success", "result": []})).toEqual(false);
  });
});
