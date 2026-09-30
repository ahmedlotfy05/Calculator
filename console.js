let currentInput = ""; // Stores the digits being typed (allows multi-digit numbers)
let storedNumber = null; // Stores running total / previous number
let activeOperator = null; // Stores active operator

const numberButtons = document.querySelectorAll(".numbers");
const operatorButtons = document.querySelectorAll(".operators");
const display = document.querySelector("#display");
const equalButton = document.querySelector(".equal");
const clearButton = document.querySelector(".clear");

function add(num1, num2) {

    return num1 + num2;

}

function sub(num1, num2) {

    return num1 - num2;

}

function multiply(num1, num2) {

    return num1 * num2;

}

function divide(num1, num2) {

    if (num1 == 0 && num2 == 0)

        {
 
            return display.textContent = "Error";

        }

    else {

    return num1 / num2;

    }

}

function operate(operator, num1, num2) {

    if (operator === "+") return add(num1, num2);
    if (operator === "-") return sub(num1, num2);
    if (operator === "*") return multiply(num1, num2);
    if (operator === "/") return divide(num1, num2);

    return num2;

}

// 1. Multi-digit input: append digits as text
numberButtons.forEach((button) => {

    button.addEventListener("click", () => {

        currentInput += button.id;
        display.textContent = currentInput;

    });

});

// 2 & 3. Multiple operands & chained operations
operatorButtons.forEach((button) => {

    button.addEventListener("click", () => {

        if (currentInput === "" && storedNumber === null) return;

        display.textContent = button.id;

        // If an operator is pressed and a number was typed, evaluate previous operation
        if (storedNumber !== null && currentInput !== "") {

            storedNumber = operate(activeOperator, storedNumber, parseFloat(currentInput));
            

        } else if (currentInput !== "") {

            storedNumber = parseFloat(currentInput);
        }

        activeOperator = button.id;
        currentInput = ""; // Ready for the next number

    });
    
});

// Calculate final result
equalButton.addEventListener("click", () => {

    if (storedNumber !== null && currentInput !== "" && activeOperator !== null) {

        let result = operate(activeOperator, storedNumber, parseFloat(currentInput));
        display.textContent = result;

        // Keep result in memory so you can immediately continue calculating with another operator
        storedNumber = result;
        currentInput = "";
        activeOperator = null;
    }

});

// Reset state
clearButton.addEventListener("click", () => {

    currentInput = "";
    storedNumber = null;
    activeOperator = null;
    display.textContent = "";

});