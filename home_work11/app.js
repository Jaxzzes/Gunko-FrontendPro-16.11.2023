// Point 1
const numbers = [];

for (let i = 20; i <= 30; i += 0.5) {
    numbers.push(i);
};

const result = numbers.join(", ");
console.log(`Numbers from 20 to 30 in increments of 0.5: ${result}`);
  
console.log(' ');
// Point 2
const exchangeRate = 27;

console.log('Converting $ to UAH:');
for (let i = 10; i <= 100; i += 10) {
    const UAH = i * exchangeRate;
    console.log(`${i} dollars is equal to ${UAH} UAH`);
};


console.log(' ');
// Point 3
const number = 37;
const numbersPoint3 = [];

for (let i = 1; i <= 100; i++) {
    const square = i * i;

    if (square <= number) {
        numbersPoint3.push(i);
    };
};

const resultPoint3 = numbersPoint3.join(", ");

console.log(`All integers whose square does not exceed the selected number: ${resultPoint3}`);


console.log(' ');
// Point 4
let isPrime = true;

if (number <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        };
    };
};

if (isPrime) {
    console.log(`${number} is a prime number.`);
} else {
    console.log(`${number} is not a prime number.`);
};


console.log(' ');
// Point 5
let exponent = 1;
let requiredNumber = 3;

while (requiredNumber < number) {
    exponent++;
    requiredNumber *= 3;
};

if (requiredNumber === number) {
    console.log(`The number ${number} can be obtained by raising the number 3 to the power of ${exponent}`);
} else {
    console.log(`The number ${number} cannot be obtained by raising the number 3 to any power.`);
};
