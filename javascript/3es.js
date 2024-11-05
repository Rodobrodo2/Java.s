
let score = parseInt(prompt("Inserisci il tuo punteggio:"));

if (isNaN(score)) {
  console.log("Inserisci un numero valido.");
} else {
  let range = Math.floor(score / 10); //Math.floor(score / 10): Questo calcolo riduce lo score a una "fascia" di punteggio.

  switch (range) {
    case 10:
    case 9:
      console.log("Voto ottimo");
      break;
    case 8:
    case 7:
      console.log("Voto buono");
      break;
    case 6:
      console.log("Voto sufficiente");
      break;
    default:
      console.log("Voto insufficiente");
  }
}
