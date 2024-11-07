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
