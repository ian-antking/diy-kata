const humanCatDogYears = (number) => {
    let catYears = (number - 2) * 4 + (15 + 9);
    let dogYears = (number - 2) * 5 + (15 + 9);

    return [number, catYears, dogYears];
    
};

module.exports = humanCatDogYears;
