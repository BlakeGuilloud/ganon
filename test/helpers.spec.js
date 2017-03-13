const helpers = require('../lib/helpers');
const isEmptyObject = helpers.isEmptyObject;
const invalidRequest = helpers.invalidRequest;
const isRequired = helpers.isRequired;

describe('isEmptyObject()', () => {
  it('should be a function', () => {
    const sut = isEmptyObject;

    expect(typeof sut).toEqual('function');
  });

  describe('an object with values being passed in', () => {
    const sut = isEmptyObject({ firstName: 'First name is required' });

    it('should return false', () => {
      expect(sut).toEqual(false);
    });
  });

  describe('an empty object being passed in', () => {
    const sut = isEmptyObject({});

    it('should return true', () => {
      expect(sut).toEqual(true);
    });
  });
});

describe('invalidRequest()', () => {
  const sut = invalidRequest('type', 'firstName');

  it('should return an object with two properties', () => {
    expect(typeof sut).toEqual('object');
    expect(Object.keys(sut).length).toEqual(2);
  });

  it('should have a false success property', () => {
    expect(sut.success).toEqual(false);
    expect(sut.success).toBeFalsy();
  });

  it('should have a truthy message property', () => {
    expect(sut.message).toBeTruthy();
    expect(typeof sut.message).toEqual('string');
  });
});

describe('isRequired()', () => {
  describe('a required object with no value', () => {
    const sut = isRequired({ value: '', type: 'input', required: true });

    it('should return a truthy value', () => {
      expect(sut).toBeTruthy();
      expect(sut).toBe(true);
    });
  });

  describe('a required object with a value', () => {
    const sut = isRequired({ value: 'Blake', type: 'input', required: true });

    it('should return a falsy value', () => {
      expect(sut).toBeFalsy();
      expect(sut).toBe(false);
    });
  });

  describe('an object that is not required', () => {
    const sut = isRequired({ value: 'Blake', type: 'input', required: false });

    it('should return a falsy value', () => {
      expect(sut).toBeFalsy();
      expect(sut).toBe(false);
    });
  });
});
