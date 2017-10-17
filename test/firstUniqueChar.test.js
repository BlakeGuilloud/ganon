const { firstUniqueChar } = require('../lib');

test('first unique character of candy is c', () => {
    expect(firstUniqueChar('candy')).toBe('c');
});

test('first unique character of chocolate is h', () => {
  expect(firstUniqueChar('chocolate')).toBe('h');
});

test('first unique character of Trick is T', () => {
    expect(firstUniqueChar('Trick')).toBe('T');
});

test('first unique character of Trick or treat is i', () => {
    expect(firstUniqueChar('Trick or treat')).toBe('i');
});

test('bbooooo contains all repeated characters so should return an empty string', () => {
    expect(firstUniqueChar('bbooooo')).toBe('');
});