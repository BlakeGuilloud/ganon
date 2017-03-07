const Ganon = require('../dist/ganon.min');
const state = {
  firstName: {
    type: 'input',
    required: true,
    value: 'asdf',
  },
  lastName: {
    type: 'input',
    required: true,
    value: '',
  },
  birthday: {
    type: 'birthday',
    required: true,
    value: '1990-05-18',
  },
  emails: {
    type: 'email',
    required: false,
    value: [
      {
        id: null,
        typeId: 4,
        value: 'blake',
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
    ],
  },
  // email: {
  //   type: 'email',
  //   required: false,
  //   value: 'fbguillo@gmail.com',
  // },
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
  console.log('subject under test', sut);
  it('should return a success property', () => {
    expect(sut.success).toEqual(true);
  });
});
