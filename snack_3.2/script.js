let array = ["Roberto", "Giovanni", "Simona", "Luigi", "Tommaso", "Lorenzo", "Maria", "Veronica", "Alessio", "Federico"];
let new_array = [];

let min_pos = Math.floor(Math.random() * 5);  
let max_pos = Math.floor(Math.random() * 5);  
let counter = 0;

if (min_pos > max_pos) {
    let change_pos = min_pos;
    min_pos = max_pos;
    max_pos = change_pos;
} 


console.log(array, min_pos, max_pos);


const array_filter = array.filter((element, index) => {
    return min_pos <= index && max_pos >= index;
});

console.log(array_filter);
