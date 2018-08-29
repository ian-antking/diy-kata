const { booleanToWord } = require('../src');

describe('booleanToWord', () => {
  // how do we create specs again???
  it('returns Yes when passed true', () => {
    const result = booleanToWord(true);
    expect(result).toBe('Yes');
  });

  it('returns No when passed false', () => {
    const result = booleanToWord(false);
    expect(result).toBe('No');
  });
});
