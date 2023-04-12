const DISPLAY = document.getElementById("display-container"),
      NUMPAD = document.getElementById("numpad-container"),
      MAX_DISPLAY_LENGTH = 19,    //number of characters that can fit in the calculator display
      MSG_DIV_BY_ZERO = "you broke it ;(";

let displayText = "",
    firstNumber = "",
    operator = "",
    secondNumber = "",
    result = "";

clear = () => displayText = firstNumber = operator = secondNumber = result = "";

checkDecimal = () => {
  if (operator === "") {
    if (!firstNumber.includes(".")) {
        firstNumber += ".";
        displayText += ".";
    } 
  } 
else if (!secondNumber.includes(".")) {
    secondNumber += ".";
    displayText += ".";
  }
}

checkDivByZero = () => { 
  if (result === MSG_DIV_BY_ZERO) {
    displayText = MSG_DIV_BY_ZERO;
  return;
}}

//converts results to exponential notation so they fit on the calculator display
roundAndDisplay = () => {
  if (result.length > MAX_DISPLAY_LENGTH) {
    result = result.toExponential(MAX_DISPLAY_LENGTH);
  }
    displayText = result.toString();
    return displayText;
}

//If the user has entered each part of an expression, evaluate the immediate pair of firstNumber and secondNumber
//Then, the result of that pair's evaluation becomes assigned to firstNumber for the next operation, and so on. 
//secondNumber is set to empty for the next operation, too.
//As users click any of the operator buttons, they will see the results from each operation step as they are added
evaluateCurrentPair = () => {
  if (firstNumber != "" && operator != "" && secondNumber != "") {
    result = operate(firstNumber, operator, secondNumber);
    checkDivByZero();
    firstNumber = result;
    secondNumber = "";
    roundAndDisplay();
  }
}

handleKeypress = (ev)  => {
  const ALLOWED_KEYS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "/", "*", "+", "-", "=", "c", "Backspace", "Enter"];
  let pressedKey = ev.key;
  if (!ALLOWED_KEYS.includes(pressedKey)) {
    ev.preventDefault();
    return;
  }
  switch (pressedKey) {
      case ".":
          checkDecimal();
          break;
      case "/":
          ev.preventDefault();
          evaluateCurrentPair();
          operator = "÷";
          displayText += operator;
          break;
      case "*":
          evaluateCurrentPair();
          operator = "×";
          displayText += operator;
          break;
      case "+":
          evaluateCurrentPair();
          operator = "+";
          displayText += operator;
          break;
      case "-":
          evaluateCurrentPair();
          operator = "-";
          displayText += operator;
          break;
      case "c":
        clear();
        break;
      case "=":
      case "Enter":
          evaluateCurrentPair();
          break;
      case "Backspace":
        deleteInput();
    break;
      default:
        if ('0' <= pressedKey <= '9') {
            if (operator === "") {
                firstNumber += pressedKey;
                displayText += pressedKey;
            } else {
                secondNumber += pressedKey;
                displayText += pressedKey;
            }
        }
  }

    return DISPLAY.textContent = displayText;
}

handleClick = (ev) => {
  let clickedButton = ev.target;
  switch (clickedButton.id) {
    case "decimal":
      checkDecimal();
      break;
    case "division":
      evaluateCurrentPair();
      operator = "÷";
      displayText += operator;
      break;
    case "multiplication":
      evaluateCurrentPair();
      operator = "×";
      displayText += operator;
      break;
    case "addition":
      evaluateCurrentPair();
      operator = "+";
      displayText += operator;
      break;
    case "subtraction":
      evaluateCurrentPair();
      operator = "-";
      displayText += operator;
      break;
    case "equals":
      evaluateCurrentPair();
      break;
    case "clear":
      clear();
      break;
		case "backspace":
			deleteInput();
			break;
    default:
      if (operator === "") {
        firstNumber += clickedButton.value;
        displayText += clickedButton.value;
      } else {
        secondNumber += clickedButton.value;
        displayText += clickedButton.value;
      }
  }

  return DISPLAY.textContent = displayText;
}

NUMPAD.addEventListener("click", handleClick);
window.addEventListener("keydown", handleKeypress);

add = (a, b) => a + b;
subtract = (a, b) => a - b;
multiply = (a, b) => a * b;
divide = (numerator, denominator) => {
    if (denominator === 0) {
      return MSG_DIV_BY_ZERO;
    }
    return numerator / denominator;
};

operate = (firstNumber, operator, secondNumber) => {
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

deleteInput = () => {
  //If there's a result from a previous calculation, 
  //whatever is in displayText becomes the value of firstNumber for the new calculation (minus 1 char to account for the backspace).
  //if a result hasn't been calculated yet, remove 1 char from the latest part of the expression and update the display accordingly.
  if (result) {
    firstNumber = displayText.slice(0, -1);
    secondNumber = "";
    operator = "";
    result = "";
    displayText = firstNumber;
  } else if (secondNumber) {
    secondNumber = secondNumber.slice(0, -1)
    displayText = firstNumber + operator + secondNumber;
  } else if (operator) {
    operator = "";
    displayText = firstNumber;
  } else if (firstNumber) {
    firstNumber = firstNumber.slice(0, -1);
    displayText = firstNumber;
  }
}