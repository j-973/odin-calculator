const display = document.getElementById("display-container");
const numpad = document.getElementById("numpad-container");
//in addition to displayText, created variables for the firstNumber, operator, and secondNumber so they can be used with the operate function.
let displayText = "";
let firstNumber = "";
let operator = "";
let secondNumber = "";

updateDisplay = (ev) => {
  //ev.target refers to the specific button that the user clicks (the target of the click event).
  let clickedButton = ev.target;
  switch (clickedButton.id) {
    case "division":
      operator = "÷";
      displayText += operator;
      break;
case "multiplication":
      operator = "×";
      displayText += operator;
      break;
    case "addition":
      operator = "+";
      displayText += operator;
      break;
    case "subtraction":
      operator = "-";
      displayText += operator;
      break;
    //when the user clicks the equals button, store the called operate function in the result variable. 
    case "equals":
      let result = operate(firstNumber, operator, secondNumber);
    //use tostring to convert the result to a string so it can be displayed by displayText
      displayText = result.toString();
      break;
    case "clear":
      firstNumber = "";
      operator = "";
      secondNumber = "";
      displayText = "";
      break;
    ////adds the corresponding button's value property as defined in index.html if none of the above cases evaluate true
    //if the operator hasn't been clicked yet, all user clicks update the first number and the display text. 
    //After the operator has been clicked, update the second number and the display.
    default:
      if (operator === "") {
        firstNumber += clickedButton.value;
        displayText += clickedButton.value;
      } else {
        secondNumber += clickedButton.value;
        displayText += clickedButton.value;
      }

  }

  //once the value of displayText is determined, assign it as new text in the calculator's display container div
  return display.textContent = displayText;
}

//with EVENT DELEGATION, this single event listener on the parent div handles the click events that "bubble" up from each of the many buttons within the div. 
//By default, events are handled by the innermost element in the DOM where the event happens (in this case, the buttons), and propagate to outer elements (numpad div or parent div), called event bubbling.
numpad.addEventListener("click", updateDisplay);

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
  //converting the first and second number inputs from strings to floating point (decimal) numbers. 
  //This makes it so that the the previously defined math functions (addition, subtraction, multiplication, division) can operate on them
  firstNumber = parseFloat(firstNumber);
  secondNumber = parseFloat(secondNumber);

  switch (operator) {
    case "+":
      return add(firstNumber, secondNumber);
    case "-":
      return subtract(firstNumber, secondNumber);
    case "×":
      return multiply(firstNumber, secondNumber);
    case "÷":
      return divide(firstNumber, secondNumber);
  }
}

