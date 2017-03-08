const emailHelpers = require('../lib/emailHelpers');
const matchEmailRegex = emailHelpers.matchEmailRegex;
const matchEmail = emailHelpers.matchEmail;

describe('matchEmailRegex()', () => {
  describe('when a valid email is provided', () => {
    it('should return false when provided with a valid email', () => {
      const sut = matchEmailRegex('a@b.c');
      const sut1 = matchEmailRegex('aj.mc@yahoo.com');

      expect(sut).toEqual(false);
      expect(sut1).toEqual(false);
    });

    it('should return true when provided with a invalid email', () => {
      const sut = matchEmailRegex('ab.c');
      const sut1 = matchEmailRegex('aj.mc@yahoo');

      expect(sut).toEqual(true);
      expect(sut1).toEqual(true);
    });
  });
});

describe('matchEmail()', () => {
  describe('when a valid email is provided', () => {
    it('should return false when provided with a valid email', () => {
      const sut = matchEmail({ value: 'a@b.c' });
      const sut1 = matchEmail({ value: 'aj.mc@yahoo.com' });

      expect(sut).toEqual(false);
      expect(sut1).toEqual(false);
    });

    it('should return true when provided with a invalid email', () => {
      const sut = matchEmail({ value: 'ab.com' });
      const sut1 = matchEmail({ value: 'aj.mc@yaho@o' });

      expect(sut).toEqual(true);
      expect(sut1).toEqual(true);
    });
  });
});
