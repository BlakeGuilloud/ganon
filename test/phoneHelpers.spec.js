// const phoneHelpers = require('../lib/phoneHelpers');
// const stripPhone = phoneHelpers.stripPhone;
// const checkPhoneRegex = phoneHelpers.checkPhoneRegex;
// const matchPhone = phoneHelpers.matchPhone;
//
// describe('stripPhone()', () => {
//   it('should remove all non-numberic characters', () => {
//     const sut = stripPhone('(843)812-1233');
//
//     expect(typeof parseInt(sut, 10)).toEqual('number');
//   });
//
//   it('should not manipulate properly formatted numbers', () => {
//     const sut = stripPhone('+18438125555');
//
//     expect(sut).toEqual('+18438125555');
//   });
// });
//
// describe('checkPhoneRegex()', () => {
//   describe('when a valid phone number is provided', () => {
//     it('should return false', () => {
//       const sut = checkPhoneRegex('(843)812-1233');
//
//       expect(sut).toBeFalsy();
//       expect(sut).toEqual(false);
//     });
//   });
//
//   describe('when an invalid phone number is provided', () => {
//     it('should return false', () => {
//       const sut = checkPhoneRegex('(84333)812-1233');
//
//       expect(sut).toBeTruthy();
//       expect(sut).toEqual(true);
//     });
//   });
// });
//
// describe('matchPhone()', () => {
//   describe('when a valid value is provided', () => {
//     const sut = matchPhone({ value: '8438125599' });
//
//     it('should return false', () => {
//       expect(sut).toEqual(false);
//       expect(sut).toBeFalsy();
//     });
//   });
//
//   describe('when an invalid value is provided', () => {
//     it('should return true', () => {
//       const sut = matchPhone({ value: '123' });
//       const sut1 = matchPhone({ value: 'abc' });
//       const sut2 = matchPhone({ value: '+18882222' });
//
//       expect(sut).toEqual(true);
//       expect(sut).toBeTruthy();
//       expect(sut1).toEqual(true);
//       expect(sut1).toBeTruthy();
//       expect(sut2).toEqual(true);
//       expect(sut2).toBeTruthy();
//     });
//   });
// });
