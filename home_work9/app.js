// let numOrStr = prompt('input number or string');
// console.log(numOrStr);

// if(numOrStr === null) {
// console.log('ви скасували');
// } else if( numOrStr.trim() === '' ) {
// console.log('Empty String');
// } else if ( isNaN( +numOrStr ) ) {
// console.log(' number is Ba_NaN');
// } else {
// console.log('OK!');
// }

let numOrStr = prompt('Input number or string');
console.log(numOrStr);

let result;

switch (true) {
    case numOrStr === null:
        result = 'You canceled!';
        break;
    case numOrStr.trim() === '':
        result = '(Empty string) - You haven\u0027t entered anything!';
        break;
    case isNaN(+numOrStr):
        result = 'You entered string!';
        break;
    default:
        result = 'You entered number!';
        break;
}

console.log(result);