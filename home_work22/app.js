const SIZE_SMALL = "small";
const SIZE_LARGE = "large";

const STUFFING_CHEESE = "cheese";
const STUFFING_SALAD = "salad";
const STUFFING_POTATO = "potato";

const TOPPING_MAYO = "mayo";
const TOPPING_SEASONING = "seasoning";

class Hamburger {
  constructor(size, stuffing) {
    this.size = size;
    this.stuffing = stuffing;
    this.toppings = [];
  };

  static PRICES = {
    small: 50,
    large: 100,
    cheese: 10,
    salad: 20,
    potato: 15,
    mayo: 20,
    seasoning: 15,
  };

  static CALORIES = {
    small: 20,
    large: 40,
    cheese: 20,
    salad: 5,
    potato: 10,
    mayo: 5,
    seasoning: 0,
  };

  addTopping(topping) {
    this.toppings.push(topping);
  };

  calculatePrice() {
    let price = Hamburger.PRICES[this.size] + Hamburger.PRICES[this.stuffing];

    this.toppings.forEach((topping) => {
      price += Hamburger.PRICES[topping];
    });

    return price;
  };

  calculateCalories() {
    let calories =
      Hamburger.CALORIES[this.size] + Hamburger.CALORIES[this.stuffing];

    this.toppings.forEach((topping) => {
      calories += Hamburger.CALORIES[topping];
    });

    return calories;
  };
};

const hamburger = new Hamburger(SIZE_SMALL, STUFFING_CHEESE);
hamburger.addTopping(TOPPING_MAYO);

console.log("Calories: " + hamburger.calculateCalories());
console.log("Price: " + hamburger.calculatePrice());

hamburger.addTopping(TOPPING_SEASONING);
console.log("Price with seasoning: " + hamburger.calculatePrice());
