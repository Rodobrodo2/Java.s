let score = parseInt(prompt("Inserisci il tuo punteggio:"));

if (isNaN(score)) {
  console.log("Inserisci un numero valido.");
} else {
  if (score >= 90 && score <= 100) {
    console.log("Voto ottimo");
  } else if (score >= 70 && score <= 89) {
    console.log("Voto buono");
  } else if (score >= 60 && score <= 69) {
    console.log("Voto sufficiente");
  } else if (score <= 59) {
    console.log("Voto insufficiente");
  } else {
    console.log("Il punteggio inserito è fuori dal range valido (0-100).");
  }
}

// parseInt converte l'input da stringa a numero intero.
// isNaN(score): Questo controllo verifica se l'input inserito è un numero. Se non lo è, stampa un messaggio di errore in console.
// score >= 90 && score <= 100: Verifica se il punteggio è compreso tra 90 e 100 e stampa e cosi via.
