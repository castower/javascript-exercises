const convertToCelsius = function(temp) {

  conversion = (temp - 32) * (5/9);
  if (Number.isInteger(conversion)) {
    conversionNum = conversion;
  } else {
    conversionNum = conversion.toFixed(1); 
    conversionNum = parseFloat(conversionNum);
  }

  return conversionNum
};

const convertToFahrenheit = function(temp) {

  conversion = (temp * (9/5)) + 32;
  if (Number.isInteger(conversion)) {
    conversionNum = conversion;
  } else {
    conversionNum = conversion.toFixed(1); 
    conversionNum = parseFloat(conversionNum);
  }
  return conversionNum
};

console.log(convertToCelsius(32)) // fahrenheit to celsius, should return 0

console.log(convertToFahrenheit(0)) // celsius to fahrenheit, should return 32

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
