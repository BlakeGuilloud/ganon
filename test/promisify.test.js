const { promisify } = require("../lib");
const { readdir } = require("fs");
const path = require("path");

describe("promisify", () => {
  const asyncSuccess = (cb) => {
    setTimeout(() => {
      cb(null, "resolved");
    }, 10);
  };

  const asyncFail = (cb) => {
    setTimeout(() => {
      cb(new Error("rejected"));
    }, 10);
  };

  test("promisify should return a function", () => {
    const promisified = promisify(asyncSuccess);
    expect(typeof promisified).toBe("function");
  });

  test("promisified function should return a promise", () => {
    const promisified = promisify(asyncSuccess);
    const promise = promisified();
    expect(Promise.resolve(promise)).toBe(promise);
  });

  test("promise should resolve", () => {
    const promisified = promisify(asyncSuccess);
    return promisified().then((result) => {
      expect(result).toBe("resolved");
    });
  });

  test("promise should reject", () => {
    const promisified = promisify(asyncFail);
    return promisified()
      .then(() => {
        return Promise.reject(new Error("oops, the promise resolved"));
      })
      .catch((error) => {
        expect(error.message).toBe("rejected");
      });
  });

  test("promisifed function should take arguments", () => {
    const promisifiedReaddir = promisify(readdir);
    const lib = path.join(__dirname, "../lib");
    return promisifiedReaddir(lib)
      .then((files) => {
        expect(files.length).toBeGreaterThan(0);
      });
  });

  test("should throw if first argument is not a function", () => {
    expect(() => promisify(1)).toThrow();
    expect(() => promisify("fn")).toThrow();
    expect(() => promisify({})).toThrow();
    expect(() => promisify()).toThrow();
  });
});
