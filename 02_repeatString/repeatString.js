const repeatString = function(string, num) {
 
    output = "";
    if (num >= 0) {
        for (i=0; i < num; i++) {
            output += string;
        }

        return output
    } else {
        return "ERROR"
    }
};

//console.log(repeatString("hey", 3))

// Do not edit below this line
module.exports = repeatString;
