const question = prompt('Enter the action you want to perform! (Add, subtract, multiply, or divide)\nEnter "add" to add.\nEnter "sub" to perform subtraction.\nEnter "mult" to perform multiplication.\nEnter "div" to perform division.');

const firstValue = prompt('To perform the action, enter the first number.');
const secondValue = prompt('To perform the action, enter the second number.');

let result;

switch (question) {
    case 'add':
        result = +firstValue + +secondValue;
        break;
    case 'sub':
        result = +firstValue - +secondValue;
        break;
    case 'mult':
        result = +firstValue * +secondValue;
        break;
    case 'div':
        result = +firstValue / +secondValue;
        break;
    default:
        console.log('Invalid operation');
}

console.log(result);


alert(`Answer: ${result}`);

