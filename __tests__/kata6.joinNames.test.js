const { joinNames } = require('../src');

describe('joinNames', () => {
  it('returns string of names, seperated by commas and an ampersand', () => {
    const names = [{name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'}];
    const names2 = [{name: 'Rob'}, {name: 'Sansa'}, {name: 'Bran'}, {name: 'Arya'}, {name: 'Rickon'}];
    expect(joinNames(names)).toBe('Bart, Lisa & Maggie');
    expect(joinNames(names2)).toBe('Rob, Sansa, Bran, Arya & Rickon');

  });
});
