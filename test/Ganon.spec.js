const Ganon = require('../dist/ganon.min');
const testData = {
  firstName: {
    type: 'string',
    required: true,
    value: 'Forrest',
  },
  middleName: {
    type: 'string',
    required: false,
    value: 'Blake',
  },
  lastName: {
    type: 'string',
    required: true,
    value: 'Guilloud',
  },
  birthday: {
    type: 'birthday',
    required: true,
    value: '1990-05-18',
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
  phones: {
    type: 'phone',
    required: false,
    value: [
      {
        id: null,
        typeId: 3,
        value: '+18438126962',
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
    value: [
      {
        locationId: 3,
        userTypeId: 19,
      },
    ],
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

  it('should return a success property', () => {
    expect(sut.success).toEqual(true);
  });
});
