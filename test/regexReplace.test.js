const { regexReplace } = require("../lib");

describe("regexReplace", () => {
  test("regexReplace('foobar') should return 'testbar'", () => {
    expect(regexReplace("foobar", "foo", "test")).toEqual("testbar");
  });

  test("regexReplace('foobarfoobar', 'foo', 'test') should return 'testbarfoobar'", () => {
    expect(regexReplace("foobar", "foo", "test")).toEqual("testbarfoobar");
  });

  test("regexReplace('foobarfoobar', 'foo', 'test', true) should return 'testbartestbar'", () => {
    expect(regexReplace("foobar", "foo", "test", true)).toEqual("testbartestbar");
  });
});
