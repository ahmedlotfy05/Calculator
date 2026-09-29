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

    return num1 / num2;

}

function operate(operator, num1, num2) {

    if (operator == "+") {

        add(num1, num2);

    }
    
    else if (operator == "-") {

        sub(num1,num2);

    }

    else if (operator == "*") {

        multiply(num1, num2);
        
    }

    else if (operator == "/") {

        divide(num1, num2)

    }

}

const numberButtons = document.querySelectorAll(".numbers");

const operatorButtons = document.querySelectorAll(".operators")

const display = document.querySelector("#display");

const equalButton = document.querySelector(".equal")

numberButtons.forEach((button) => {

    button.addEventListener("click", () => {

        num1 = button.id;
        display.textContent = num1;

    });

});

numberButtons.forEach((button) => {

    button.addEventListener("click", () => {

        num2 = button.id;
        display.textContent = num2;

    });

});

operatorButtons.forEach((button) => {

    button.addEventListener("click", () => {

        operator = button.id;
        display.textContent = operator;

    });

});

equalButton.addEventListener("click", () => {

    if (num1 != 0 || num2!= 0 || operator != null)
        
    {

        let result = operate(operator, num1, num2);
        display.textContent = result;

    }
    
    else {

        display.textContent = "Invalid input";

    }

})