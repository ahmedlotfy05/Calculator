let num1 = null;

let num2 = null;

let operator = null;

function add(num1, num2) {

    return (num1) + (num2);

}

function sub(num1, num2) {

    return num1 - num2;

}

function multiply(num1, num2) {

    return num1 * num2;

}

function divide(num1, num2) {

    return num1 / num2;

}

function operate(operator, num1, num2) {

    if (operator == "+") {

        return add(num1, num2);

    }
    
    else if (operator == "-") {

        return sub(num1,num2);

    }

    else if (operator == "*") {

        return multiply(num1, num2);
        
    }

    else if (operator == "/") {

        return divide(num1, num2)

    }

}

const numberButtons = document.querySelectorAll(".numbers");

const operatorButtons = document.querySelectorAll(".operators")

const display = document.querySelector("#display");

const equalButton = document.querySelector(".equal")

const clearButton = document.querySelector(".clear")

numberButtons.forEach((button) => {

    button.addEventListener("click", () => {

        if (num1 == null)

        {

            num1 = parseInt(button.id, 10);
            display.textContent = num1;

        }

        else {

            num2 = parseInt(button.id, 10);
            display.textContent = num2;
        
        }
    });

});

operatorButtons.forEach((button) => {

    button.addEventListener("click", () => {

        operator = button.id;
        display.textContent = operator;

    });

});

equalButton.addEventListener("click", () => {

    if (num1 != null && num2 != null && operator != null)
        
    {

        let result = operate(operator, num1, num2);
        display.textContent = result;

        num1 = null;
        num2 = null;
        operator = null;
        
    }
    
    else {

        display.textContent = "Invalid input";

    }

});

clearButton.addEventListener ("click", () => {

    num1 = null;
    num2 = null;
    operator = null;
    display.textContent = "";

});