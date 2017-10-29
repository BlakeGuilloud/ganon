const { escapeRegExp } = require("../lib");

describe("escapeRegExp", () => {
  // required for quotes test
  /* eslint-disable no-useless-escape,quotes */
  test("Escapes all RegExp characters", () => {
    expect(escapeRegExp("4**2")).toEqual("4\\*\\*2");
    expect(escapeRegExp("4^2")).toEqual("4\\^2");
    expect(escapeRegExp("(parentheses)")).toEqual("\\(parentheses\\)");
    expect(escapeRegExp('You should "Google" it')).toEqual('You should \\"Google\\" it');
  });
  /* eslint-enable no-useless-escape,quotes */

  test("Undefined/Null/Empty checks", () => {
    expect(escapeRegExp(undefined)).toEqual("");
    expect(escapeRegExp(null)).toEqual("");
    expect(escapeRegExp([])).toEqual("");
    expect(escapeRegExp(1)).toEqual("");
  });
});
