
const repeatString = function(text, n) {
    if(n <0)
        return "ERROR";
    let newString='';
    for(let i=0; i<n; i++)
        newString = newString.concat("",text);
    return newString;
};

// Do not edit below this line
module.exports = repeatString;
