const { debounce } = require("../lib");

describe("debounce", () => {
  const callback = jest.fn();
  jest.useFakeTimers();

  test("callback should fire after 100ms", () => {
    const debounced = debounce(callback, 100);
    debounced();
    expect(callback).not.toHaveBeenCalled();
    jest.runAllTimers();
    expect(callback).toHaveBeenCalled();
    expect(setTimeout.mock.calls[0][1]).toBe(100);
  });

  test("callback should be called with arguments", () => {
    jest.clearAllMocks();
    const debounced = debounce(callback, 100);
    debounced(1, "a", []);
    jest.runAllTimers();
    expect(callback).toHaveBeenCalledWith(1, "a", []);
  });

  test("callback should only fire once if called multiple times", () => {
    jest.clearAllMocks();
    const debounced = debounce(callback, 100);
    debounced();
    debounced();
    debounced();
    jest.runAllTimers();
    expect(callback).toHaveBeenCalledTimes(1);
  });

  test("callback should fire once after 150ms", () => {
    jest.clearAllMocks();
    const debounced = debounce(callback, 100);
    debounced();
    expect(callback).not.toHaveBeenCalled(); // at 0ms
    jest.runTimersToTime(50);
    debounced();
    jest.runTimersToTime(50);
    expect(callback).not.toHaveBeenCalled(); // at 100ms
    jest.runTimersToTime(50);
    expect(callback).toHaveBeenCalled(); // at 150ms
  });

  test("debounce should throw if first argument is not a function", () => {
    jest.clearAllMocks();
    expect(() => debounce(1, 100)).toThrow();
    expect(() => debounce("fn", 100)).toThrow();
    expect(() => debounce({}, 100)).toThrow();
    expect(() => debounce()).toThrow();
  });

  test("debounce should throw if second argument is not a number", () => {
    jest.clearAllMocks();
    expect(() => debounce(callback, "100")).toThrow();
    expect(() => debounce(callback, [])).toThrow();
    expect(() => debounce(callback, {})).toThrow();
  });
});
