const Ganon = require('../dist/ganon.min');
const state = {
  firstName: {
    type: 'input',
    required: true,
    value: 'blake',
  },
  lastName: {
    type: 'input',
    required: false,
    value: '',
  },
  age: {
    type: 'input',
    required: true,
    value: 26,
  },
  phone: {
    type: 'phone',
    required: false,
    value: '8438126962',
  },
  email: {
    type: 'email',
    required: false,
    value: 'fbguillo@gmail.com',
  },
  // CONSENT
  // locations: {
  //   type: 'array',
  //   required: true,
  //   value: [
  //     {
  //       name: 'Charleston',
  //       state: 'SC',
  //     }
  //   ]
  // }
};

describe('An empty request', () => {
  const sut = Ganon();

  it('should return an empty object', () => {
    expect(sut).toEqual({});
    expect(Object.keys(sut).length).toEqual(0);
  });
});

describe('A valid request', () => {
  const sut = Ganon(state);
  it('should return a success property', () => {
    expect(sut.success).toEqual(true);
  });
});
