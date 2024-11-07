
let score = parseInt(prompt("Inserisci il tuo punteggio:"));

if (isNaN(score)) {
  console.log("Inserisci un numero valido.");
} else {
  let range = Math.floor(score / 10);

  switch (true) {
    case (range >= 9 && range <= 10):
      console.log("Voto ottimo");
      break;
    case (range >= 7 && range <= 8):
      console.log("Voto buono");
      break;
    case (range === 6):
      console.log("Voto sufficiente");
      break;
    case (range === 5):
      console.log("Voto insufficiente");
      break;
    default:
      console.log("Punteggio non definito o molto basso.");
      break;
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
person.age = 44;
person.job = "Macellaio";

console.log(person);
console.log(person.age);
console.log(person.job);

for (generalita in person) {
  console.log(generalita + ": " + person[generalita]);
}
