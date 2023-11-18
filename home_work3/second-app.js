const number = 12345;


const firstValue = number / 10000 | 0;
const secondValue = number % 10000 / 1000 | 0;
const thirdValue = number % 1000 / 100 | 0;
const fourthValue = number % 100 / 10 | 0;
const fivethValue = number % 10;


console.log(`${firstValue} ${secondValue} ${thirdValue} ${fourthValue} ${fivethValue}`);
