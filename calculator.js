// Get the elements from the HTML
var number1Input = document.getElementById('number1');
var number2Input = document.getElementById('number2');
var resultDisplay = document.getElementById('calculation-result');

// Function to add two numbers
function add() {
    var number1 = parseFloat(number1Input.value) || 0;
    var number2 = parseFloat(number2Input.value) || 0;
    resultDisplay.textContent = number1 + number2; // Display result directly
}

// Function to subtract two numbers
function subtract() {
    var number1 = parseFloat(number1Input.value) || 0;
    var number2 = parseFloat(number2Input.value) || 0;
    resultDisplay.textContent = number1 - number2; // Display result directly
}

// Function to multiply two numbers
function multiply() {
    var number1 = parseFloat(number1Input.value) || 0;
    var number2 = parseFloat(number2Input.value) || 0;
    resultDisplay.textContent = number1 * number2; // Display result directly
}

// Function to divide two numbers
function divide() {
    var number1 = parseFloat(number1Input.value) || 0;
    var number2 = parseFloat(number2Input.value) || 0;
    if (number2 === 0) {
        resultDisplay.textContent = "Cannot divide by zero"; // Handle division by zero
    } else {
        resultDisplay.textContent = number1 / number2; // Display result directly
    }
}

// Add event listeners to buttons
document.getElementById('add').addEventListener('click', add);
document.getElementById('subtract').addEventListener('click', subtract);
document.getElementById('multiply').addEventListener('click', multiply);
document.getElementById('divide').addEventListener('click', divide);
