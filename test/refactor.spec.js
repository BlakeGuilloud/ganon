const Ganon = require('../lib/refactor');
const cleanRequest = {
  firstName: {
    dataType: 'string',
    name: 'input',
    required: true,
    value: 'Blake',
  },
  loginEmail: {
    dataType: 'string',
    name: 'loginEmail',
    required: true,
    value: 'blake@rhinogram.com',
  },
  locations: {
    dataType: 'array',
    name: 'locations',
    required: true,
    value: [
      {
        locationId: 3,
        userTypeId: 19,
      },
    ],
  },
};

describe('refactor', () => {
  describe('A clean request', () => {
    const sut = Ganon(cleanRequest);

    it('should return an empty object', () => {
      expect(sut).toEqual({});
    });
  });
});

// describe('An empty request', () => {
//   const sut = Ganon();
//
//   it('should return an empty object', () => {
//     expect(sut).toEqual({});
//     expect(Object.keys(sut).length).toEqual(0);
//   });
// });

// describe('A valid request', () => {
//   const sut = Ganon(testData);
//
//   it('should return a success property', () => {
//     expect(sut.success).toEqual(true);
//   });
// });
