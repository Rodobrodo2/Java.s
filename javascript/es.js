let name = 'Aldo';
const age = 33;
console.log(name, age);

let value = 5;
console.log(value);
value = 55;
console.log(value);

let number = 37;
{
    let number = 57;
    console.log(number);
}
console.log(number);

let outside = 2;
{
    let inside = 8;
    console.log(outside, inside);
}
// console.log(outside, inside); *inside avendo lo scope a blocco , all esterno del blocco non si stampa.

for(i = 0; i <= 20; i +=2) {
    console.log(i);
}