# odin-calculator

## Description
A basic calculator, in your browser!

My iteration of this project adheres to the guidelines set out by the maintainers of **The Odin Project**, a self-paced curriculum for learning web development (links at the bottom).

**Why did I complete this project?:** To combine the HTML, CSS, and JS skills that I've learned in the Odin Project Foundations course.

## Preview
![j-973 github io_odin-calculator_](https://user-images.githubusercontent.com/47262509/231534602-78fc4087-9051-40ea-9a26-3366e89962d5.png)

## Launching this Project
- Click here to run it in your browser: https://j-973.github.io/odin-calculator/

## Features
* Mouse 🖱️ and Keyboard ⌨️ support:
  * Numbers: `0-9`
  * Addition: `+`
  * Subtraction: `-`
  * Multiplication: `*`
  * Division: `/`
  * Decimals: `.`
  * Evaluate expressions: `Enter` or `=`  
  * `Backspace` supported
  * Clearing the calculator: `c`

## What I Learned
- Event Delegation and Event Bubbling: With event delegation, you can use a single event listener on a parent element (like a `numpad-container` div) to handle events from its child elements (such as each button in a numpad). This is possible because of event bubbling, where events propagate from the innermost element to outer elements in the DOM.
- How to use `preventDefault()` to prevent default behavior when an event triggers (e.g. preventing the "quick find" browser shortcut from activating when trying to divide using the `/` key) 
- Fall-through cases: If you leave off the `break` keyword after a case in a `switch` statement, the code will “fall through” to the next case. This is useful for giving multiple keys/cases (like `=` and `Enter`) the same logic.  
- The `includes()` method is useful for checking if a user's keypress is included in an array of allowed keys, so you can properly handle keyboard input.
- How to use the `slice()` method to output a string with 1 fewer character to create a backspace button.

### Sources
 - Odin Project "Foundations" Path: https://www.theodinproject.com/paths/foundations/courses/foundations
 - Project Instructions: https://www.theodinproject.com/lessons/foundations-calculator

