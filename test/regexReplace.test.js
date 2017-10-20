const { regexReplace } = require("../lib");

describe("regexReplace", () => {
  test("regexReplace('foobar') should return 'testbar'", () => {
    expect(regexReplace("foobar", "foo", "test")).toEqual("testbar");
  });

  test("regexReplace('foobarfoobar') should return 'testbarfoobar'", () => {
    expect(regexReplace("foobar", "foo", "test")).toEqual("testbarfoobar");
  });

  test("regexReplace('foobarfoobar') should return 'testbartestbar'", () => {
    expect(regexReplace("foobar", "foo", "test", 1)).toEqual("testbartestbar");
  });
});
