let array = [];
let new_array = [];

let min_pos = Math.floor(Math.random() * 5);  
let max_pos = Math.floor(Math.random() * 5);  
let counter = 0;

if (min_pos > max_pos) {
    let change_pos = min_pos;
    min_pos = max_pos;
    max_pos = change_pos;
} 

array = getRandomUnique(0,10,5);
console.log(array, min_pos, max_pos);

new_array = arrayIntervall(array, min_pos, max_pos);

console.log("new_array", new_array);


function arrayIntervall(array, min, max){
    for (counter = min; counter <= max; counter++){
        console.log(counter, array[counter]);
        new_array.push(array[counter]);
    }
    return new_array;
}

function getRandomUnique(min, max, rep) {
    max +=  1;
    rep -=  1;
    array_random = [];
    while (array_random.length <= rep) {
        random_value = Math.floor(Math.random() * (max - min)) + min;
        if (array_random.includes(random_value) == false) {
            array_random.push(random_value);
            // console.log("inserito in array_random " + random_value);
        } else {
            // console.log ("già ripetuto" + random_value);
        }
    }
    return array_random;
}