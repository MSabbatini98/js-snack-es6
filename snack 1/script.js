let bike = [
    {
        nome : "bici1",
        colore : "bianco",
        peso : 25
    },
    {
        nome : "bici2",
        colore : "rosso e verde",
        peso : 30
    },
    {
        nome : "bici3",
        colore : "blue",
        peso : 23
    },
    {
        nome : "bici4",
        colore : "rosa",
        peso : 27.5
    },
    {
        nome : "bici5",
        colore : "arcobaleno",
        peso : 37
    }
];
    
console.log(bike);

let bike_lighter = bike[0];

for (let i = 0; i < bike.length; i++) {
    if (bike[i].peso < bike_lighter.peso) {
        bike_lighter = bike[i];
    }
}
const {nome, peso} = bike_lighter;
console.log(
    `
    La bici più leggera è : ${nome} con un peso di soli  ${peso} kg 
    `
    )
console.log(bike_lighter);
