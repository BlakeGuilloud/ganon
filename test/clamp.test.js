const { clamp } = require('../lib');

test('clamp of 42 in the range of 1 to 50 to be 42', () => {
    expect(clamp(42, 1, 50)).toBe(42);
});

test('clamp of -23 in the range of 0 to 10 to be 0', () => {
    expect(clamp(-23, 0, 10)).toBe(0);
});

test('clamp of 1234 in the range of 89 to 99 to be 99', () => {
    expect(clamp(1234, 89, 99)).toBe(99);
});