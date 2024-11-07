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
console.log(user.tel);

//For 
const arr = ['red', 'blue', 'green', 'purple', 'red', 'indaco', 'white', 'black', 'pink'];
const body = document.querySelector('body')  
// document.querySelector è un metodo in JavaScript che 
// permette di selezionare un elemento (o nodo) nel DOM (Document Object Model) di una pagina HTML. 
// Con querySelector, puoi accedere a un elemento specifico usando i selettori CSS come se stessi stilizzando l’elemento in un file CSS. 
for(let i = 0; i < arr.length; i++) {
    const p = document.createElement('p');  //document.createElement() crea un elemento nel HTML direttamente dal ciclo in JS.
    p.innerText = arr[i]; //Testo interno a p = i valori dell arr 
    body.appendChild(p); // al body appendiamo un figlio (paragrafo)
}
//LENGTH lo utilizziamo quando dentro l'array ci sono molti valori, quindi length andra a fare il conteggio per noi

for(let i = 0; i < 10; i++) {
    console.log('Ciao');
} //output: 10 volte ciao

const stringArray = ["apple", "banana", "cherry", "date", "elderberry", "fig", "grape", "diocan"];
for(let i = 0; i < stringArray.length; i++) {
    console.log(stringArray[i]);
}

//voglio sommare tutti i numeri dentro numArr
const numArr = [1, 2, 3, 4, 5, 6];
let result2 = 0;

for(let i = 0; i < numArr.length; i++) {
    const num = numArr[i];
    result2 += num;
}
console.log(result2); //creo un contatore result2 che fa la somma tra result2 e la costante num. 
// L’operatore += è equivalente a scrivere result2 = result2 + num; 
//aggiorna quindi il valore di result2 aggiungendo num a quello che era già memorizzato in result2.


//L'array numArr contiene [1, 2, 3, 4, 5, 6]. Di seguito, i dettagli di ogni iterazione del ciclo for:

// Prima Iterazione (i = 0)
// num = numArr[0] → num = 1
// result2 += num → result2 = 0 + 1 → result2 diventa 1
// Seconda Iterazione (i = 1)

// num = numArr[1] → num = 2
// result2 += num → result2 = 1 + 2 → result2 diventa 3
// Terza Iterazione (i = 2)

// num = numArr[2] → num = 3
// result2 += num → result2 = 3 + 3 → result2 diventa 6
// Quarta Iterazione (i = 3)

// num = numArr[3] → num = 4
// result2 += num → result2 = 6 + 4 → result2 diventa 10
// Quinta Iterazione (i = 4)

// num = numArr[4] → num = 5
// result2 += num → result2 = 10 + 5 → result2 diventa 15
// Sesta Iterazione (i = 5)

// num = numArr[5] → num = 6
// result2 += num → result2 = 15 + 6 → result2 diventa 21
// Al termine del ciclo, result2 contiene la somma di tutti gli elementi di numArr, ossia 21.

// Stesso codice di come sopra pero con i numeri pari
const numArr1 = [1, 2, 3, 4, 5, 6];
let result3 = 0;

for(let i = 0; i < numArr1.length; i++) {
    const num = numArr1[i];
    if (num % 2 === 0) {
        result3 += num;
    }
}
console.log(result3); /* qui chiedo di fare la somma di tutti i numeri pari con la condizione if
(num % 2 === 0) L'operatore % (modulo) restituisce il resto della divisione di num per 2.
Se num % 2 è uguale a 0, significa che num è pari (non lascia resto nella divisione per 2), 
quindi la condizione if è vera solo per i numeri pari. */

// Per farlo dispari verificheremo se num % 2 !== 0, ovvero se num non è divisibile per 2 senza resto.

//FUNZIONI
function hello(gabbiano) {
    console.log('Hello ' + gabbiano)
}
hello('Steve')
hello('Meth')
hello('Strunz')
hello('Chiara')

const peso = 60;
function pesotot() {
    console.log('Chiara pesa ' + peso)
}
pesotot()

//return
function hello2(name4) {
    return 'Hello ' + name4
}
const value = hello2('Luca');
const frase6 = value + ' come stai?';
console.log(frase6); //anche console.log(hello('Luca'));

function generalità(a, b) {
    const obj = {
        name: a,
        age: b
    }
    return obj
}
const value1 = generalità('Luca', 54);
const frase1 = 'Hello ' + value1.name + ' oggi compi ' + value1.age + ' anni';
console.log(frase1);


//Le closures

function outerFunction(a) {
    function innerFunction(b) {
        return a + b
    }
    return innerFunction
}
const result4 = outerFunction(10)(30);
console.log(result4);

/* si poteva scrivere anche cosi:
const newInner = outerFunction(10);
 const result4 = newInner(30);
 console.log(result4); */

 const numarr5 = [1,3,4,5,6,7,8,9,10];
 function outerFunction1(arr5) {
    function innerFunction1(num) {
        for(let i = 0; i < arr5.length; i++){
            const element = arr5[i];
            if(element > num) {
                console.log(element);
            }
        }
    }
    return innerFunction1
 }

 outerFunction1(numarr5)(6);