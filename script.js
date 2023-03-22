//Matching the "3 + 5" example given on the instructions page
let firstNumber = 3;
let operator = "+";
let secondNumber = 5;

add = (a, b) => {
    return a + b;
};
  
subtract = (a, b) => {
    return a - b;
};
  
multiply = (a, b) => {
    return a * b;
};
  
divide = (numerator, denominator) => {
    if (denominator === 0) {
      return 'Error: Cannot divide by zero';
    }
    return numerator / denominator;
};

operate = (firstNumber, operator, secondNumber) => {
  switch (operator) {
    case "+":
      return add(firstNumber, secondNumber);
    case "-":
      return subtract(firstNumber, secondNumber);
    case "*":
      return multiply(firstNumber, secondNumber);
    case "/":
      return divide(firstNumber, secondNumber);
  }
}

//TESTING operate function:
console.log(operate(3, "+", 5)); //8
console.log(operate(3, "-", 5)); //-2
console.log(operate(3, "*", 5)); //15
console.log(operate(10, "/", 5)); //2
console.log(operate(3, "/", 0)); //Error: cannot divide by zero