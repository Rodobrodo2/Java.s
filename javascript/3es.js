
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


let arr = [1, 2, 3, 4, 5];
console.log(arr);
result = 0;
for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    result += num;
}
console.log("RISULTATO", result);

// Array inverso

let arr2 = [1, 2, 3, 4, 5];
for (let i = 0; i < arr2.length / 2; i++) { // arr2.length / 2 perche dobbiamo invertiresolo l 1 e il 2 con il 5 e 4, quindi fino a meta.
  let opposto = arr2.length - 1 - i; // la variabile opposto serve per scambiare l indice 0 con lindice 4
  
  let temp = arr2[i]; //la variabile temp ci permette di scambiare l indice 0 con l indice 4 e l indice 1 con l indice 3.
  arr2[i] = arr2[opposto];
  arr2[opposto] = temp;
}

console.log("Array invertito:", arr2);

//Popolamento array

let parole = [];


for (let i = 0; i < 5; i++) {
    let parola = prompt("Inserisci una parola:");
    parole.push(parola);
}

for (let i = 0; i < parole.length; i++) {
    let parola = parole[i];
    if (parola.length % 2 !== 0) { 
        console.log(parola);
    }
}

// Crea oggetto 

let person = {
  name: "Mario",
  age: 30,
  city: "Roma"
};

console.log(person);
