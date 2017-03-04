const Ganon = require('../dist/ganon.min');

describe('An empty request', () => {
  const sut = Ganon();

  it('should return an empty object', () => {
    expect(sut).toEqual({});
    expect(Object.keys(sut).length).toEqual(0);
  });
});

describe('A valid request', () => {
  const sut = Ganon(
    {
      firstName: 'Blake',
    },
  );
  it('should return a success property', () => {
    expect(sut.success).toEqual(true);
  });
});
