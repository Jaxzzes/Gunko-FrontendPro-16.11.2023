const question = prompt('Enter the action you want to perform! (Add, subtract, multiply, or divide) \nEnter "add" to add. \nEnter "sub" to perform the subtraction. \nEnter "mult" to perform multiplication. \nEnter "mult" to perform multiplication.');

const firstValue = prompt('To perform the action, enter the first number.');

const secondValue = prompt('To perform the action, enter the second number.');

let addResult;
let subResult;
let multResult;
let divResult;

if ( question === 'add' ) {
    addResult = +firstValue + +secondValue;
};

if ( question === 'sub' ) {
    subResult = +firstValue - +secondValue;
};

if ( question === 'mult' ) {
    multResult = +firstValue * +secondValue;
};

if ( question === 'div' ) {
    divResult = +firstValue / +secondValue;
};

console.log(addResult);
console.log(subResult);
console.log(multResult);
console.log(divResult);

if ( question === 'add' ) {
    alert(`Answer: ${addResult} \nThank you for checking my homework :)`);
};

if ( question === 'sub' ) {
    alert(`Answer: ${subResult} \nThank you for checking my homework :)`);
};

if ( question === 'mult' ) {
    alert(`Answer: ${multResult} \nThank you for checking my homework :)`);
};

if ( question === 'div' ) {
    alert(`Answer: ${divResult} \nThank you for checking my homework :)`);
};