let numbers = [];

const firstValue = prompt("Enter value 1:");
numbers.push(+firstValue);

const secondtValue = prompt("Enter value 2:");
numbers.push(+secondtValue);

const thirdValue = prompt("Enter value 3:");
numbers.push(+thirdValue);

const sum = numbers.reduce((acc, val) => acc + val, 0);

const mean = sum / numbers.length;

const roundedMean = Math.round(mean);

console.log(numbers);

console.log(sum);

console.log(mean);

console.log(roundedMean);

alert(`Mean: ${roundedMean}`);

