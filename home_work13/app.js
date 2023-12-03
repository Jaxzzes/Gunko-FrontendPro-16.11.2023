const givenArray = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

// Point 1

let sum = 0;
let positiveCount = 0;


for (let i = 0; i < givenArray.length; i++) {
  if (givenArray[i] > 0) {
    positiveCount++;
    sum += givenArray[i];
  };
};

console.log(`Sum of positive elements: ${sum}`);
console.log(`Quantity of positive elements: ${positiveCount}`);


console.log(' ');

// Point 2

let minElement = givenArray[0];
let minIndex = 0;

for (let i = 1; i < givenArray.length; i++) {
  if (givenArray[i] < minElement) {
    minElement = givenArray[i];
    minIndex = i;
  };
};

console.log(`Minimum element: ${minElement}`);
console.log(`Index of the minimum element: ${minIndex}`);


console.log(' ');

// Point 3

let maxElement = givenArray[0]; 
let maxIndex = 0;

for (let i = 1; i < givenArray.length; i++) {
  if (givenArray[i] > maxElement) {
    maxElement = givenArray[i];
    maxIndex = i;
  };
};

console.log(`Maximum element: ${maxElement}`);
console.log(`Index of the maximum element: ${maxIndex}`);



console.log(' ');

// Point 4

let negativeCount = 0;

for (let i = 0; i < givenArray.length; i++) {
  if (givenArray[i] < 0) {
    negativeCount++;
  }
}

console.log(`Quantity of negative elements: ${negativeCount}`);



console.log(' ');

// Point 5

let oddPositiveCount = 0;

for (let i = 0; i < givenArray.length; i++) {
  const currentElement = givenArray[i];

  if (currentElement > 0 && currentElement % 2 !== 0) {

    let isUnique = true;
    for (let j = 0; j < i; j++) {
      if (givenArray[j] === currentElement) {
        isUnique = false;
        break;
      };
    };

    if (isUnique) {
      oddPositiveCount++;
    };
  };
};

console.log(`Quantity of odd positive elements: ${oddPositiveCount}`);



console.log(' ');

// Point 6

let evenPositiveCount = 0;

for (let i = 0; i < givenArray.length; i++) {
  const currentElement = givenArray[i];

  if (currentElement > 0 && currentElement % 2 === 0) {
   
    let hasIdenticalElement = false;
    for (let j = 0; j < givenArray.length; j++) {
      if (i !== j && givenArray[j] === currentElement) {
        hasIdenticalElement = true;
        break;
      };
    };

    if (hasIdenticalElement) {
      evenPositiveCount++;
    };
  };
};

console.log(`Quantity of even positive elements: ${evenPositiveCount}`);



console.log(' ');

// Point 7

let sumOfEvenPositiveElements = 0;

for (let i = 0; i < givenArray.length; i++) {
  const currentElement = givenArray[i];

  if (currentElement > 0 && currentElement % 2 === 0) {
    let hasIdenticalElement = false;
    for (let j = 0; j < givenArray.length; j++) {
      if (i !== j && givenArray[j] === currentElement) {
        hasIdenticalElement = true;
        break;
      };
    };

    if (hasIdenticalElement) {
      sumOfEvenPositiveElements += currentElement;
    };
  };
};

console.log(`Sum of even positive elements: ${sumOfEvenPositiveElements}`);



console.log(' ');

// Point 8

let sumOfOddPositiveElements = 0;

for (let i = 0; i < givenArray.length; i++) {
  const currentElement = givenArray[i];

  if (currentElement > 0 && currentElement % 2 !== 0) {

    let hasIdenticalElement = false;
    for (let j = 0; j < givenArray.length; j++) {
      if (i !== j && givenArray[j] === currentElement) {
        hasIdenticalElement = true;
        break;
      };
    };

    if (!hasIdenticalElement) {
      sumOfOddPositiveElements += currentElement;
    };
  };
};

console.log(`Sum of odd positive elements: ${sumOfOddPositiveElements}`);



console.log(' ');

// Point 9

let productOfPositiveElements = BigInt(1);

for (let i = 0; i < givenArray.length; i++) {
  const currentElement = givenArray[i];

  if (currentElement > 0) {
    productOfPositiveElements *= BigInt(currentElement);
  };
};

console.log(`Product of positive elements: ${productOfPositiveElements}`);



console.log(' ');

// Point 10

for (let i = 0; i < givenArray.length; i++) {
  if (givenArray[i] !== maxElement) {
    givenArray[i] = 0;
  }
}

console.log(`Array after zeroization: ${givenArray}`);
