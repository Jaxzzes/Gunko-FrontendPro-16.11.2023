// Point 1

function calculateNumbersMean(arr) {
    
    const numberElements = arr.filter(element => typeof element === 'number');
  
    if (numberElements.length === 0) {
      return 0;
    };
  
    const sum = numberElements.reduce((acc, num) => acc + num, 0);
  
    const mean = sum / numberElements.length;
  
    return mean;
};
  
const array = [1, 'two', 3, 'four', 5, true, 6, 7, undefined];
const result = calculateNumbersMean(array);

console.log(`Arithmetic mean of number elements: ${result}`);
console.log('');


// Point 2

function doMath(x, znak, y) {

    x = parseFloat(x);
    y = parseFloat(y);
  
    if (isNaN(x) || isNaN(y)) {
      return "Error! Please enter valid numbers.";
    };
  
    switch (znak) {
      case "+":
        return x + y;
      case "-":
        return x - y;
      case "*":
        return x * y;
      case "/":
        return x / y;
      case "%":
        return x % y;
      case "^":
        return Math.pow(x, y);
      default:
        return "Error - invalid operator. Please enter one of: +, -, *, /, %, ^";
    };
};
  
const x = prompt("Enter the first number:");
const znak = prompt("Enter the operator (+, -, *, /, %, ^):");
const y = prompt("Enter the second number:");

const result2 = doMath(x, znak, y);
console.log(result2);
alert(`Result: ${result2}`);
console.log('');


// Point 3

function ManyLevelsArray() {
    const numlevels = prompt("Enter the number of levels for the array:");

    const numValues = prompt("Enter the number of values for each level:");

    const levelsArray = [];

    for (let i = 0; i < numlevels; i++) {
        const currentLevel = [];

        for (let j = 0; j < numValues; j++) {
            const value = prompt(`Enter the value for element at position [${i}][${j}]:`);
            currentLevel.push(value);
        };

        levelsArray.push(currentLevel);
    };

    return levelsArray;
};


const userArray = ManyLevelsArray();
console.log(userArray);
console.log('');


// Point 4

function removeCharacters(userString, charactersToRemove) {
    const resultString = userString.split('').filter(char => charactersToRemove.indexOf(char) === -1).join('');

    return resultString;
};

const userString = prompt("Enter the string!");
const charactersToRemove = [];
const userNumberCharacters = prompt("Number of characters to remove from the string!");
parseFloat(userNumberCharacters);

for (let i = 1; i <= userNumberCharacters; i++) {
    const userCharacter = prompt(`Enter ${i} character!`);
    charactersToRemove.push(userCharacter);
};

const result4 = removeCharacters(userString, charactersToRemove);
console.log(result4);
alert(`String after remove your characters: ${result4}`);
