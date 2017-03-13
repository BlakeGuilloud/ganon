const Ganon = require('../lib/refactor');
const cleanRequest = {
  firstName: {
    dataType: 'string',
    required: true,
    message: 'First name das required',
    value: 'Blake',
  },
  lastName: {
    dataType: 'string',
    required: false,
    value: '',
  },
  loginEmail: {
    dataType: 'string',
    required: true,
    value: 'blake@rhinogram.com',
  },
  locations: {
    dataType: 'array',
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
    console.log('sut', sut);
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
