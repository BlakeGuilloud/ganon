const { throttle } = require("../lib");

describe("throttle", () => {

  const callback = jest.fn();
  jest.useFakeTimers();

  beforeEach(function () {
    jest.clearAllMocks();
  });

  test("callback should fire immediately", () => {
    const throttled = throttle(callback, 100);
    throttled();
    expect(callback).toHaveBeenCalled();
  });

  test("second call should invoke callback at 100ms", () => {
    const throttled = throttle(callback, 100);
    throttled();
    throttled();
    expect(callback).toHaveBeenCalledTimes(1);
    jest.runAllTimers();
    expect(callback).toHaveBeenCalledTimes(2);
    expect(setTimeout.mock.calls[0][1]).toBe(100);
  });

  test("callback should be invoked only twice", () => {
    const throttled = throttle(callback, 100);
    throttled();
    throttled();
    throttled();
    throttled();
    jest.runAllTimers();
    expect(callback).toHaveBeenCalledTimes(2);
  });

  test("callback should be called with the most recent arguments", () => {
    const throttled = throttle(callback, 100);
    throttled();
    throttled("1");
    throttled("2");
    throttled("3");
    jest.runAllTimers();
    expect(callback.mock.calls[1][0]).toBe("3");
  });

  test("callback should be invoked at 100ms after staggered calls", () => {
    const throttled = throttle(callback, 100);
    throttled(); // at 0ms
    jest.runTimersToTime(25);
    throttled(); // at 25ms
    jest.runTimersToTime(25);
    throttled(); // at 50ms
    jest.runTimersToTime(25);
    throttled(); // at 75ms
    jest.runAllTimers();
    expect(callback).toHaveBeenCalledTimes(2);
    expect(setTimeout.mock.calls[0][1]).toBe(100);
  });

  test("throttle should throw if first argument is not a function", () => {
    expect(() => throttle(1, 100)).toThrow();
    expect(() => throttle("fn", 100)).toThrow();
    expect(() => throttle({}, 100)).toThrow();
    expect(() => throttle()).toThrow();
  });

  test("throttle should throw if second argument is not a number", () => {
    expect(() => throttle(callback, "100")).toThrow();
    expect(() => throttle(callback, [])).toThrow();
    expect(() => throttle(callback, {})).toThrow();
  });
});
