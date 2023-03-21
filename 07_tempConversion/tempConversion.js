const convertToCelsius = function (temperatureF) {
  let tempC = ((temperatureF - 32) * 5) / 9;
 
  if ((tempC % 1) == 0) //daca valoarea este intreaga, o returnez fara virgula 
    return tempC;
  else
    return parseFloat(tempC.toFixed(1)); //utilizez functia toFixed() pentru a seta o singura zecimala dupa virgula
};

const convertToFahrenheit = function (temperatureC) {
  let tempF = (temperatureC * 9) / 5 + 32;
  if ((tempF % 1) == 0) //daca valoarea este intreaga, o returnez fara virgula 
  return tempF;
else
  //utilizez parseFloat pentru a converti stringul in float
  return parseFloat(tempF.toFixed(1)); //utilizez functia toFixed() pentru a seta o singura zecimala dupa virgula
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};


