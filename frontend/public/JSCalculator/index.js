//JS of index.html from @AntoninMarolleau 04/09/2025
/*
ChangeLog 04/09/2025 : change the weird expression that was showed on the display to a more readable one

*/
const display = document.getElementById("display");
let expression = ""; 

/**
 * update the display value with the parameter
 * 
 * @param {*} userInput : the key pressed and what we want the symbol to looks like
 * @param {*} actualInput : the equivalent of the key pressed that eval can read
 */
function appendToDisplay(userInput, actualInput = userInput) {
  display.value += userInput;      // what the user will see
  expression += actualInput;       // what eval will see
}

/**
 * clear the display
 */
function clearDisplay() {
  display.value = "";
  expression = "";
}

/**
 * uses eval to calculate the expression
 */
function calculate() {
  try {
    display.value = eval(expression);
    expression = display.value;
  } catch (error) {
    display.value = "Error";
    expression = "";
  }
}
