describe('buildChain', () => {
  it('should not throw on async functions', async () => {
    const sleep = n => new Promise(resolve => setTimeout(resolve, n));

    await sleep(500);
  });

  it('should not throw on object spread', () => {
    const a = { a: 1, b: 2 };
    const b = { c: 3, d: 4 };
    const c = { a: 5 };

    const result = { ...a, ...b, ...c };

    expect(result).toEqual({ a: 5, b: 2, c: 3, d: 4 });
  });

  it('should not throw on class fields', () => {
    class Test {
      x = 5;
      y = 6;

      boundFunc = () => this.x;
    }

    const instance = new Test();

    const func = instance.boundFunc;

    expect(func()).toBe(5);
  });
});
