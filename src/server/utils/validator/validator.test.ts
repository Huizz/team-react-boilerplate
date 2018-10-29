import Validator from 'server/utils/validator';

describe('Validator', () => {

  const validator = new Validator('Test');

  describe('error().throwsWhen()', () => {
    test('no error thrown if condition is FALSE', () => {
      expect.assertions(5);
      expect(validator.error(400).throwsWhen(false)).toBeTruthy();
      expect(validator.error(403).throwsWhen(false)).toBeTruthy();
      expect(validator.error(404).throwsWhen(false)).toBeTruthy();
      expect(validator.error(500).throwsWhen(false)).toBeTruthy();
      expect(validator.error(1).throwsWhen(false)).toBeTruthy();
    });

    test('respective errors thrown if condition is TRUE', () => {
      expect.assertions(5);
      expect(() => validator.error(400).throwsWhen(true)).toThrow(new RegExp(validator.error().message.badRequest));
      expect(() => validator.error(403).throwsWhen(true)).toThrow(new RegExp(validator.error().message.unauthorised));
      expect(() => validator.error(404).throwsWhen(true)).toThrow(new RegExp(validator.error().message.notFound));
      expect(() => validator.error(500).throwsWhen(true)).toThrow(new RegExp(validator.error().message.unexpected));
      expect(() => validator.error(1).throwsWhen(true)).toThrow(new RegExp(validator.error().message.unexpected));
    });
  })

})