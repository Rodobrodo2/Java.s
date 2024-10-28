// String
// name = "Redi";
// var name1 = "Redi";

let name2 = "Redi";
const name3 = "Redi";

console.log(name2, name3);

name2 = "Pasqualino";
// name3 = "Giovanni"; non si può riassegnare.

console.log(name2, name3);

// Number

const age = 25;
const delta = "5s";
const result = age + Number(delta); // NaN not a number

// Number() cambia la stinga in numero
// concatena i valori (+)

console.log(result);

let counter = 0;
counter = counter + 1;
counter += 1;
counter++;
// 3 operazioni uguali, assegna a counter il valore di se stesso + 1; uguale per la sottrazione

// Boolean
const valid = true;
const not_valid = false;

// Valori truly = true, 1, qualsiasi dato generico esclusi i valori falsy.
// Valori falsy = false, 0, "", null, undefined. (null=dato vuoto ma esiste) (undefined=non esiste).

// Array (liste di elementi)
const numbers = [5, 3, 0, 11];

// Indice=chiave (puntare all'elemento che mi interessa)
console.log(numbers[1]);

numbers[1] = 7; // Posso cambiare l'interno dell' array.
console.log(numbers[1]);

// Object (liste di elementi con associazione chiave valore, la chiave=stringa, il valore puo essere qualsiasi cosa)
const user = {
    first_name: "Redi",
    last_name: "Rroshi",
    age: 25,
    address: {
        city: "Pesaro",
        zip_code: 61121,
    },
    roles: ["user", "admin"],
    tel: null,
};

// Primo modo
console.log(user.address.city);
console.log(user.roles[1]);

// Secondo modo (scrivo la chiave come stringa)(statico)
console.log(user["first_name"]);

// Terzo modo (dinamico)
const key = "last_name";
console.log(user[key]);

// Condizione (test, pongo delle ugaglianze o delle diseguaglianze che restituiranno valori truly o falsy).
// (&&=and tutte le condizioni truly, ||=or almeno una condizione truly).
if ((user.age >= 18 && user.age <= 20) || user.address.city == "Milano") {
    console.log("Puoi Entrare");
} else {
    console.log("Non puoi");
}

// != (not= quindi diverso)(not e un operatore)
const is_password_invalid = true;
if (!is_password_invalid) {
    console.log("Ok");
} else {
    console.log("No");
}

if (user.tel == undefined || user.tel == null) {
    user.tel = 1234;
} // else if ()  Nel mezzo posso mettere quanti else if voglio. Posso anche utilizzare lo switch
console.log(user);s