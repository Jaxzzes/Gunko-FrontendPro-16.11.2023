class SuperMath {
  constructor() {}

  check(obj) {
    const { X, Y, znak } = obj;

    const validOperators = ["+", "-", "/", "*", "%"];
    if (!validOperators.includes(znak)) {
      alert(
        "Invalid operator. Please enter a valid operator (+, -, /, *, %)."
      );
      this.input();
      return;
    };

    const userConfirmation = confirm(
      `Do you want to perform the action ${znak} with ${X} and ${Y}?`
    );

    if (userConfirmation) {
      const result = this.calculate(X, Y, znak);
      alert(`Result: ${result}`);
    } else {
      this.input();
    };
  };

  input() {
    const newX = parseFloat(prompt("Enter a new value for X:"));
    const newY = parseFloat(prompt("Enter a new value for Y:"));
    const newZnak = prompt("Enter a mathematical operator (+, -, /, *, %):");

    this.check({ X: newX, Y: newY, znak: newZnak });
  };

  calculate(X, Y, znak) {
    switch (znak) {
      case "+":
        return X + Y;
      case "-":
        return X - Y;
      case "/":
        return X / Y;
      case "*":
        return X * Y;
      case "%":
        return X % Y;
    };
  };
};

const superMath = new SuperMath();
const obj = { X: 12, Y: 3, znak: "/" };
superMath.check(obj);
