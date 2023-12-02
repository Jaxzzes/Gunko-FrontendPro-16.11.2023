// Я виявив проблему метода sort() повязану з сортуванням чисел та вирішив зробити більш складну логіку щоб корректно виконати завдання!

const lengthOfArray = prompt("Enter the length of the array:");
const userArray = [];

for (let i = 0; i < lengthOfArray; i++) {
  let element = prompt(`Enter element ${i + 1}:`);

  if (!isNaN(element)) {
    userArray.push(Number(element));
  } else {
    userArray.push(element);
  }
}

console.log(`Original Array: ${userArray}`);

const containsNumbers = userArray.some(item => typeof item === 'number');

if (containsNumbers) {
  for (let i = 0; i < userArray.length - 1; i++) {
    for (let j = 0; j < userArray.length - 1 - i; j++) {
      if (userArray[j] > userArray[j + 1]) {
        let temp = userArray[j];
        userArray[j] = userArray[j + 1];
        userArray[j + 1] = temp;
      }
    }
  }
  console.log(`Sorted Array (Ascending Numbers): ${userArray}`);
} else {
  userArray.sort();
  console.log(`Sorted Array (Alphabetical Order): ${userArray}`);
}

userArray.splice(2, 3);

console.log(`Array after deletion: ${userArray}`);