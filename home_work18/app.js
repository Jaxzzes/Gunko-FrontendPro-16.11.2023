function pow(num, deg) {
    if (deg === 0) {
      return 1;
    };
  
    return num * pow(num, deg - 1);
};

const number = prompt('Enter the number!');
parseFloat(number);
const degree = prompt('Enter the degree!');
parseFloat(degree);
const result = pow(number, degree);
console.log(result);