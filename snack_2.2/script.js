let squadre = [
    {
        nome : "Lazio",
        punti : 0,
        falli_subiti : 0
    },
    {
        nome : "Napoli",
        punti : 0,
        falli_subiti : 0
    },
    {
        nome : "Sampdoria",
        punti : 0,
        falli_subiti : 0
    },
    {
        nome : "Inter",
        punti : 0,
        falli_subiti : 0
    },
    {
        nome : "Milan",
        punti : 0,
        falli_subiti : 0
    },
    {
        nome : "ChievoVerona",
        punti : 0,
        falli_subiti : 0
    },
    {
        nome : "Roma",
        punti : 0,
        falli_subiti : 0
    },
    
];
/*
console.log("array iniziale", squadre);
// inserisco randomicamente i valori di punti e falli_subiti
for (let i = 0; i < squadre.length; i++ ) {
    squadre[i].punti = numeriRandom(0, 60);
    squadre[i].falli_subiti = numeriRandom(0, 80);
}

// stampo a console una stringa con solo nome e falli subiti

const final_array = [];

for (let u = 0; u < squadre.length; u++ ) {

    final_array.push({
        nome : squadre[u].nome,
        falli_subiti : squadre[u].falli_subiti
    })
}

console.log("array finale :", final_array);


*/

// modifico l'array sqaudre
const final_array = squadre.map((element) => {

    element.punti = numeriRandom(0, 60);
    element.falli_subiti = numeriRandom(0, 80);
    // deconstruisco element
    let { nome, falli_subiti: falli} = element; //const va bene comunque invece che let
    // faccio il return di element
    return {nome, falli};

});

console.log(squadre);
console.log(final_array);






function numeriRandom(min, max) {
    return Math.floor(Math.random() * (max - min +1) ) + min;
}