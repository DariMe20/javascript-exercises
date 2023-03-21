
const reverseString = function(text) {
    let reversedText='';

    //mergem de la capat spre inceput 
    for(let i=text.length-1; i>=0; i--)
    {
        //luam cate o litera de la capat spre inceput
        let last_letter = text.slice(i, i+1);
        //o adaugam in textul reversed
        reversedText =reversedText.concat(last_letter);
    }
    return reversedText;
};

// Do not edit below this line
module.exports = reverseString;
