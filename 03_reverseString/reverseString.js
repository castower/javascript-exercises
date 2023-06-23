const reverseString = function(string) {

    reverse = [];
    lastCharIndex = string.length;
    stopIndex = lastCharIndex + 1;
    for (i=0; i < string.length+1; i++) {
        letterExtract = "";
        letterExtract = string.substring(lastCharIndex, stopIndex);
        //console.log(letterExtract);
        reverse.push(letterExtract);
        lastCharIndex -= 1;
        stopIndex -= 1;
        //console.log(lastCharIndex, stopIndex);
    }

    reversed = reverse.join("");

    return reversed

};

//console.log(reverseString('hello there'));

// Do not edit below this line
module.exports = reverseString;
