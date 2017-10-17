const { decrement } = require('../lib');

test('increment of 0 to equal 1', () => {
    expect(decrement(0)).toBe(-1);
});

test('increment of 1 to equal 2', () => {
    expect(decrement(1)).toBe(0);
});

test('increment of -1 to equal 0', () => {
    expect(decrement(-1)).toBe(0-2);
});