/* function outerFunction(x) {
    function innerFunction(y) {
        return x + y
    }
    return innerFunction
}
console.log(outerFunction(5)(6)); */

function outerFunction(x, initalValue) {
    let result = initalValue;
    function innerFunction(y) {
        result += y;
        return result;
    }
    return innerFunction
}

const value = outerFunction(5, 10);
console.log(value(6)); // 5 e il parametro x(che non usiamo ora) 10 e il parametro initalvalue che inizializza result.
console.log(value(80)); // 80 u sopra 6 e il valore del parametro y o della funzione innerfunction.
//ogni volta che chiamiamo value con un valore nuovo al parametro y, il result verra aggiornato con un nuovo valore:
//(initalvalue)10 + 6(y)= 16 (result)
// (initalvalue e il result salvato in precedenza):
// 16 + 80(y) = 96.

//Counter

function createCounter() {
    let count = 0;
    return {
        increment: function() {
            count++;
            return count;
        },
        decrement: function() {
            count--;
            return count;
        },
        getCount: function() {
            return count;
        }
    };
}
const counter = createCounter();

console.log(counter.increment());  
console.log(counter.decrement()); 
console.log(counter.getCount());  

// Object.keys Object.values Object.entries

const student = {
    name: "Redi",
    age: 25,
    grade: "C",
    school: "Mia Accademy",
}

const chiavi = Object.keys(student); //Object.keys metodo per estrapolare le chiavi in un oggetto 
console.log(chiavi);
const valori = Object.values(student); //Object.values metodo per " i valori.
console.log(valori);
const entrate = Object.entries(student); //Object.entries metodo per chiave:valore.
//con .forEach (+ complesso)
entrate.forEach(function(coppia) {
    const chiave = coppia[0];
    const valore = coppia[1];
    console.log(chiave + ": " + valore);
});
// oppure con for in (piu semplice)
for (let key in student) {
    console.log(key + ": " + student[key]);
}

//forEach &map

const numbers = [1,2,3,4,5];
numbers.forEach(number => {
    console.log(number * 2);
});

const squaredNumbers = numbers.map(function(number) {
    return number * number;
});
console.log(squaredNumbers);

//filter e find

const students = [
    { name: 'Angelo', grade: 75 },
    { name: 'Anita', grade: 45 },
    { name: 'Agata', grade: 85 },
    { name: 'Aurelio', grade: 55 },
    { name: 'Amerigo-', grade: 65 }
];

const passedStudents = students.filter(function(student) {
    return student.grade >= 60;
});

const failedStudent = students.find(function(student) {
    return student.grade < 60; //find cerchera il primo elemento che soddisfa la funzione o il callback, se volessimo trovare tutti gli studenti che hanno voto < 60 dobbiamo usare filter, il quale crea un nuovo array e include tutti gli elementi che rispettano la condizione.
});

console.log("Passed Students:", passedStudents);
console.log("Failed Student:", failedStudent);

//reduce & sort

// reduce

const expenses = [150, 75, 200, 50, 125];
const totalExpenses = expenses.reduce(function(total, expense) {
    return total + expense;
}, 0);
// lo 0 e il valore iniziale di total, quindi a ogni iterazione sara 0 + 150(expense) = 150, 150 + 75 = 225 ecc. 
console.log("Somma totale delle spese:", totalExpenses);

// sort
const words = ["banana", "apple", "cherry", "date"];
const sortedWords = words.sort();
console.log("Array ordinato delle parole:", sortedWords);
