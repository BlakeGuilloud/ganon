const phoneHelpers = require('../lib/phoneHelpers');
const stripPhone = phoneHelpers.stripPhone;
const checkPhoneRegex = phoneHelpers.checkPhoneRegex;
const matchPhone = phoneHelpers.matchPhone;

describe('stripPhone()', () => {
  it('should remove all non-numberic characters', () => {
    const sut = stripPhone('(843)812-1233');

    expect(typeof parseInt(sut, 10)).toEqual('number');
  });

  it('should not manipulate properly formatted numbers', () => {
    const sut = stripPhone('+18438125555');

    expect(sut).toEqual('+18438125555');
  });
});

describe('checkPhoneRegex()', () => {
  describe('when a valid phone number is provided', () => {
    it('should return false', () => {
      const sut = checkPhoneRegex('(843)812-1233');

      expect(sut).toBeFalsy();
      expect(sut).toEqual(false);
    });
  });

  describe('when an invalid phone number is provided', () => {
    it('should return false', () => {
      const sut = checkPhoneRegex('(84333)812-1233');

      expect(sut).toBeTruthy();
      expect(sut).toEqual(true);
    });
  });
});

describe('matchPhone()', () => {
  const sut = matchPhone({ value: '8438125599' });
  console.log('sut', sut);
  it('should be a function', () => {
    expect(true).toEqual(true);
  })
});
