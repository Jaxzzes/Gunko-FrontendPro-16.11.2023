const givenArray = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];


let sum = 0;
let positiveCount = 0;


for (let i = 0; i < givenArray.length; i++) {
  if (givenArray[i] > 0) {
    positiveCount++;
    sum += givenArray[i];
  };
};

console.log(`Sum of positive elements: ${sum}`);
console.log(`Number of positive elements: ${positiveCount}`);
