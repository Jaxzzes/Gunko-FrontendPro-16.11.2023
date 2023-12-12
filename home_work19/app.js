function createSum() {
    let total = 0;
  
    return function addToTotal(value) {
      total += value;
      return total;
    };
};
  
const sum = createSum();

console.log(sum(3));
console.log(sum(5));
console.log(sum(20));
  