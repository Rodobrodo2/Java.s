let name = 'Aldo';
const age = 33;
console.log(name, age);

let value = 5;
console.log(value);
value = 55;
console.log(value);

let number = 37;
{
    let number = 57;
    console.log(number);
}
console.log(number);

let outside = 2;
{
    let inside = 8;
    console.log(outside, inside);
}
// console.log(outside, inside); *inside avendo lo scope a blocco , all esterno del blocco non si stampa.

for(i = 0; i <= 20; i +=2) {
    console.log(i);
}

let totale = 0;
for( let riga = 0; riga < 10; riga++) {
    if(riga % 2 == 0) {
        totale = totale + riga;
    }
}
console.log(totale);

//es while
let numero = 9; // Iniziamo da 9, il primo numero dispari sotto 10

while (numero >= 1) { // Continua finché numero è maggiore o uguale a 1
    console.log(numero); // Stampa il numero corrente
    numero -= 2; // Decrementa numero di 2 per passare al successivo numero dispari
}

// Es prompt
let word = prompt('Come ti chiami?'); // Interagisce con l'utente
console.log(word);