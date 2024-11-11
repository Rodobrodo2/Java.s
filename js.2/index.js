function lowerCase(str = "") {
    if(!str || typeof str !== "string")  throw new Error("str must be a valid string");
    return str.toLowerCase();
}

const newText = lowerCase("IL MIO TESTO");
console.log(newText);

//1. Creo una funzione che esegue un calcolo matematico fra due numeri.
//2. Dichiaro la funzione "calcolatre".
//3. Dichiaro il parametro a & b (due operatori per fare un operazione).
//4. Valido il parametro che verrà passato in fase di esecuzione.
//5. Il parametro non e valido => restituisco errore.
//6. Il parametro e valido => procedo con l'esecuzione.

const calculator = {
    somma: (a, b) => a + b,
    sottrazione: (a, b) => a - b,
    moltiplicazione: (a, b) => a * b,
    divisione: (a, b) => a / b,
    potenza: (a, b) => a ** b,
}

function calcolatore(a, b, operazione) {
    if (!a || typeof a !== "number") throw new Error("a must be a valid number");
    if (!b || typeof b !== "number") throw new Error("b must be a valid number");
    const acceptedOperations = Object.keys(calculator); // approccio modulare
    if(!operazione || typeof operazione !== "string" || acceptedOperations.indexOf(operazione) === -1 ) throw new Error(`operazione must be a valid string, one of ${acceptedOperations.join(", ")}`) //operazione enum
    
    return calculator[operazione](a, b);

} 

console.log(calcolatore(5, 3, "somma"));
console.log(calcolatore(5, 3, "sottrazione"));
console.log(calcolatore(3, 2, "potenza"));

// console.log(calcolatore(5, 5, "casa")); (per vedere l' errore). 
// altro metodo
/*   let risultato; 

    switch(operazione) {
        case "somma" :
            risultato = a + b;
            break;
        case "sottrazione" :
            risultato = a - b;
            break;
        case "moltiplicazione" :
            risultato = a * b;
            break;
        case  "divisione":
            if (a !== 0) {
                risultato = a / b;
            } else {
                return "Errore: divisione per zero non consentita.";
            }
            break;
        default:
            return "Operazione non valida.";
    }

    return risultato;*/