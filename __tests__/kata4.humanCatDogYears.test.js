const { humanCatDogYears } = require('../src');

// Look Ma, no handlebars!!!
describe('humanCatDogYears', () =>{
    it('Returns an array of human cat and dog years for 3 human years', () => {
        expect(humanCatDogYears(3)).toEqual([3, 28, 29]);
        expect(humanCatDogYears(10)).toEqual([10, 56, 64]);
    });
    
});
