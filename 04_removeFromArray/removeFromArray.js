const removeFromArray = function(array, drop1, drop2, drop3, drop4) {

    dropList = [drop1, drop2, drop3, drop4];
    dropList = dropList.filter(drop => drop != undefined);
    array = array.filter(arrayItem => !dropList.includes(arrayItem)); 

    return array

};

//console.log(removeFromArray([9, 8, 3, 0, 2, 8], 8));

// Do not edit below this line
module.exports = removeFromArray;
