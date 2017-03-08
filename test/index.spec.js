const Ganon = require('../dist/ganon.min');
const testData = {
  firstName: {
    type: 'string',
    required: true,
    value: '',
  },
  lastName: {
    type: 'string',
    required: true,
    value: '',
  },
  username: {
    type: 'string',
    required: true,
    value: '',
  },
  emails: {
    type: 'email',
    required: true,
    value: [
      {
        id: null,
        typeId: 4,
        value: 'blake',
      },
      {
        id: null,
        typeId: 4,
        value: 'blake@rhinogram.com',
      },
    ],
  },
  loginEmail: {
    type: 'loginEmail',
    required: true,
    value: ''
  },
  phones: {
    type: 'phone',
    required: false,
    value: [
      {
        id: null,
        typeId: 3,
        value: '+18438112326962',
      },
      {
        id: null,
        typeId: 3,
        value: '(843) 812-6986',
      },
    ],
  },
  locations: {
    type: 'location',
    required: true,
    value: [],
  },
};

describe('An empty request', () => {
  const sut = Ganon();

  it('should return an empty object', () => {
    expect(sut).toEqual({});
    expect(Object.keys(sut).length).toEqual(0);
  });
});

describe('A valid request', () => {
  const sut = Ganon(testData);
  console.log('sut', sut);

  it('should not return a success property', () => {
    expect(sut.success).toBeFalsy();
  });
});
