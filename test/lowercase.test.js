const { lowercase } = require("../lib");

test("string 'ABC' lowercased equals 'abc'", () => {
  expect(lowercase("ABC")).toBe("abc");
});

test("empty string lowercased is still empty string", () => {
  expect(lowercase("")).toBe("");
});

test("string 'SYMBOLS AND PUNCTUATION (!@#$%) STAY THE SAME.' lowercased equals 'symbols and punctuation (!@#$%) stay the same.'", () => {
  expect(lowercase("SYMBOLS AND PUNCTUATION (!@#$%) STAY THE SAME.")).toBe("symbols and punctuation (!@#$%) stay the same.");
});

test("string 'SPECIAL CHARACTERS (Á, É, Ç, ETC.) DO CHANGE' lowercased equals 'special characters (á, é, ç, etc.) do change'", () => {
  expect(lowercase("SPECIAL CHARACTERS (Á, É, Ç, ETC.) DO CHANGE")).toBe("special characters (á, é, ç, etc.) do change");
});
