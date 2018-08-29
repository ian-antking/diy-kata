const numberToReversedDigits = (number) => {
    return String(number).split('').reverse().map( digit => parseInt(digit));
}

module.exports = numberToReversedDigits;
