const removeFromArray = function (array, ...other_arg) {
    new_array = [...array]; //folosim sintaxa spread 
    //parcurgem array-ul ce trebuie sterg
    for (let i = 0; i < other_arg.length; i++) {
        let index = new_array.indexOf(other_arg[i]); //cautam elementele comune 
        if (index !== -1) {
            new_array.splice(index, 1); //daca gasim elementul din argument in array, il stergem
        }
    }
    return new_array;
};

// Do not edit below this line
module.exports = removeFromArray;

