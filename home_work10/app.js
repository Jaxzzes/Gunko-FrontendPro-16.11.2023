// Point 1!

let numbers = [];

for (let i = 10; i <= 20; i++) {
    numbers.push(i);
};

let result = numbers.join(", ");


console.log(`1 to 10 counting: ${result}`);



// Point 2!

let square;

for (let i = 10; i <= 20; i++) {
    square = i * i;
    console.log(`Square of ${i} is: ${square}`);
};



// Point 3!

const multiplier = 7;

for (let i = 1; i <= 10; i++) {
  let resultMult = multiplier * i;
  console.log(`${multiplier} * ${i} = ${resultMult}`);
};



// Point 4!

let sum = 0;

for (let i = 1; i <= 15; i++) {
  sum += i;
};

console.log(`The sum from 1 to 15 is: ${sum}`);



// Point 5!

let multResult = 1;

for (let i = 15; i <= 35; i++) {
    multResult *= i;
};

const multResultBigInt = BigInt(multResult);

console.log(`The multiplication result from 15 to 35 is: ${multResultBigInt}`);




// Point 6!

let sumForMean = 0;

for (let i = 1; i <= 500; i++) {
    sumForMean += i;
};

const mean = sumForMean / 500;

console.log(`Mean from 1 to 500 is: ${mean}`);



// Point 7!

let sumEvenNumbers = 0;

for (let i = 30; i <= 80; i++) {
  if (i % 2 === 0) {
    sumEvenNumbers += i;
  };
};

console.log(`Sum of even numbers from 30 to 80 is: ${sumEvenNumbers}`);



// Point 8!

let numbersMultOf3 = [];

for (let i = 100; i <= 200; i++) {
  if (i % 3 === 0) {
    numbersMultOf3.push(i);
  };
};

let resultMultOf3 = numbersMultOf3.join(", ");

console.log(`Numbers from 100 to 200 multiples of 3 are: ${resultMultOf3}`);



// Point 9!

const number = 24;
let numbersDiv = [];

for (let i = 1; i <= number; i++) {
  if (number % i === 0) {
    numbersDiv.push(i);
  };
};

console.log(`The divisors of ${number} are: ${numbersDiv}`);



// Point 10!

let evenDivCount = 0;

for (let i = 1; i <= number; i++) {
  if (number % i === 0) {
  } else if (i % 2 === 0) {
    evenDivCount++;
  };
};

console.log(`Number of even divisors of ${number} is: ${evenDivCount}`);



// Point 11!

let evenDivSum = 0;

for (let i = 1; i <= number; i++) {
  if (number % i === 0) {
  } else if (i % 2 === 0) {
    evenDivSum += i;
  };
};

console.log(`Sum of even divisors of ${number} is: ${evenDivSum}`);



// Point 12!

for (let i = 1; i <= 10; i++) {
    console.log(`Multiplication table for ${i}:`);
    for (let j = 1; j <= 10; j++) {
      let resultMultTable = i * j;
      console.log(`${i} * ${j} = ${resultMultTable}`);
    };
  };
  