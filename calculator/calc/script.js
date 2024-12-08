let currentExpression = "";

// Appends numbers and operators to the display
function appendToDisplay(value) {
  const display = document.getElementById('display');
  currentExpression += value;
  display.value = currentExpression;
}

// Clears the display
function clearDisplay() {
  currentExpression = "";
  const display = document.getElementById('display');
  display.value = "";
}

// Evaluates the current expression when the user clicks "="
function calculateResult() {
  const display = document.getElementById('display');
  try {
    display.value = eval(currentExpression);
    currentExpression = display.value; // Update expression with result
  } catch (error) {
    alert('Invalid Operation');
  }
}
