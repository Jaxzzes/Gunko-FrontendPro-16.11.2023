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

let numOrStr = prompt('input number or string');
console.log(numOrStr);

let result;

switch (true) {
    case numOrStr === null:
        result = 'ви скасували';
        break;
    case numOrStr.trim() === '':
        result = 'Empty String';
        break;
    case isNaN(+numOrStr):
        result = 'number is Ba_NaN';
        break;
    default:
        result = 'OK!';
        break;
}

console.log(result);