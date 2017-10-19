const { uppercase } = require('../lib');

test('string "abc" uppercased equals "ABC"', () => {
  expect(uppercase('abc')).toBe('ABC');
});

test('empty string uppercased is still empty string', () => {
  expect(uppercase('')).toBe('');
});

test('string "Symbols and punctuation (!@#$%) stay the same." uppercased equals "SYMBOLS AND PUNCTUATION (!@#$%) STAY THE SAME."', () => {
  expect(uppercase('Symbols and punctuation (!@#$%) stay the same.')).toBe('SYMBOLS AND PUNCTUATION (!@#$%) STAY THE SAME.');
});

test('string "Special characters (á, é, ç, etc.) do change" uppercased equals "SPECIAL CHARACTERS (Á, É, Ç, ETC.) DO CHANGE"', () => {
  expect(uppercase('Special characters (á, é, ç, etc.) do change')).toBe('SPECIAL CHARACTERS (Á, É, Ç, ETC.) DO CHANGE');
});
