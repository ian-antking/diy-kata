const humanCatDogYears = (number) => {
    let catYears = 0;
    let dogYears = 0;

    if (number === 1){
        catYears = 15;
        dogYears = 15;
    }else{
        catYears = (number - 2) * 4 + (15 + 9);
        dogYears = (number - 2) * 5 + (15 + 9);
    };
    return [number, catYears, dogYears];
    
};

module.exports = humanCatDogYears;
