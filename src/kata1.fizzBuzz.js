const fizzBuzz = (number) => {
    let is3 = null;
    let is5 = null;

    if (number % 3 === 0){
        is3 = true;
    }else{is3 = false};

    if (number % 5 === 0){
        is5 = true;
    }else{is5 = false};

    if (is3 && is5){
        return 'FizzBuzz';
    }else if (is3){
        return 'Fizz';
    }else if (is5){
        return 'Buzz';
    }else{
        return number;
    };
}

module.exports = fizzBuzz;
