let parola;

do {
  parola = prompt("Inserisci una parola di almeno 5 caratteri:");
} while (parola.length < 5);

console.log("Hai inserito una parola valida:", parola);

let number = 6;

if (number > 5) {
    console.log('La variabile è maggiore di 5');
} else {
    console.log('La variabile è');
}