const { alphabetize } = require('../lib');

test('alphabetize bbayzaaeell', () => {
  expect(alphabetize('bbayzaaeell')).toBe('aaabbeellyz');
});

test('alphabetize quetzalcoatl', () => {
  expect(alphabetize('quetzalcoatl')).toBe('aacelloqttuz');
});

