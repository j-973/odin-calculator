const display = document.getElementById("display-container");
const numpad = document.getElementById("numpad-container");
let displayText = "";

updateDisplay = (ev) => {
  //ev.target refers to the specific button that the user clicks (the target of the click event).
  let clickedButton = ev.target;
  switch (clickedButton.id) {
    case "division":
      displayText += "÷";
      break;
    case "multiplication":
      displayText += "×";
      break;
    case "addition":
      displayText += "+";
      break;
    case "subtraction":
      displayText += "-";
      break;
    case "equals":
      displayText += "=";
      break;
    case "clear":
      displayText = "";
      break;
    default:
      //adds the corresponding button's value property as defined in index.html if none of the above cases evaluate true
      displayText += clickedButton.value;
  }

  //once the value of displayText is determined, assign it as new text in the calculator's display container div
  return display.textContent = displayText;
}

//with EVENT DELEGATION, this single event listener on the parent div handles the click events that "bubble" up from each of the many buttons within the div. 
//By default, events are handled by the innermost element in the DOM (in this case, the buttons), and propagate to outer elements (numpad div or parent div), called event bubbling.
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

