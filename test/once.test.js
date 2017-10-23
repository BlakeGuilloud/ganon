const { once } = require("../lib");

describe("once", () => {
  test("takes a function argument", () => {
    expect(() => once({})).toThrow();
    expect(() => once([1, 2, 3])).toThrow();
    expect(() => once("123")).toThrow();
  });

  test("executes the given function", () => {
    let actual = 0;
    const work = once(() => {
      actual = 1;
    });

    work();
    expect(actual).toEqual(1);
  });

  test("does not execute more than once", () => {
    let callCount = 0;
    const increment = once(() => {
      callCount += 1;
      return callCount;
    });

    increment();
    increment();
    increment();

    const expected = 1;
    expect(callCount).toEqual(expected);
  });

  test("returns the value from the first call on later calls", () => {
    let returnValue = 1;
    const incrementAndGet = once(() => {
      returnValue += 1;
      return returnValue;
    });

    const expected = 2;
    expect(incrementAndGet()).toEqual(expected);
    expect(incrementAndGet()).toEqual(expected);
    expect(incrementAndGet()).toEqual(expected);
  });

  test("gets called with arguments", () => {
    let args;
    const arrayifyArgs = once(function() {
      args = Array.prototype.slice.call(arguments);
    });

    const actual = arrayifyArgs(1, 2, 3);
    arrayifyArgs(2, 3, 4);
    arrayifyArgs(3, 4, 5);

    const expected = [1, 2, 3];
    expect(actual).toEqual(expected);
  });

  test("is called with context", function() {
    let context;
    const bindThis = once(function() {
      context = this;
    });

    bindThis.call(1);
    bindThis.call(2);
    bindThis.call(3);

    const expected = 1;
    expect(context).toEqual(expected);
  });
});
