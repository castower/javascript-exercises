const sumAll = function(start, end) {

    numbers = [];
    numbers.push(start);
    numbers.push(end);
    min = Math.min(...numbers);
    max = Math.max(...numbers);

    if (!(Number.isInteger(start) && Number.isInteger(end))) {
        return "ERROR"
    } else if (min >= 0 && max >= 0) {
        sum = 0;
        for (i=min; i < max +1; i++) {
            sum += i;
        }
        return sum
    } else {
        return "ERROR"
    }


};

console.log(sumAll(1, 4));

// Do not edit below this line
module.exports = sumAll;
