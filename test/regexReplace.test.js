const { regexReplace } = require("../lib");

describe("regexReplace", () => {
  test("regexReplace('foobar', 'foo', 'test') should return 'testbar'", () => {
    expect(regexReplace("foobar", "foo", "test")).toEqual("testbar");
  });

  test("regexReplace('foobarfoobar', 'foo', 'test') should return 'testbarfoobar'", () => {
    expect(regexReplace("foobarfoobar", "foo", "test")).toEqual("testbarfoobar");
  });

  test("regexReplace('foobarfoobar', 'foo', 'test', 1) should return 'testbartestbar'", () => {
    expect(regexReplace("foobarfoobar", "foo", "test", 1)).toEqual("testbartestbar");
  });
});
