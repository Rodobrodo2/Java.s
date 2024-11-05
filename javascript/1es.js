let parola;

do {
  parola = prompt("Inserisci una parola di almeno 5 caratteri:");
} while (parola.length < 5);

console.log("Hai inserito una parola valida:", parola);
