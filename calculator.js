//Enter 1rst number
const x = prompt('Enter first number.', '0');
const a = parseInt(x);

//Choose operator, see function below
const operator = prompt('Enter an operator');

//Enter 2nd number
const y = prompt('Enter second number.', '0');
const b = parseInt(y);

let answer = parseInt('');

//Function adds 2 numbers 
function add(a, b) {
    return a + b;
};

//Function subtracts 2nd number from 1rst
function subtract(a, b) {
    return a - b;
};

//Func multiples 2 numbers
function multiply(a, b) {
    return a * b;
};

//Func divides 1rst number by 2nd
function divide(a, b) {
    return a/b;
};

//Takes operator and 2 numbers and calls function to match given operator
function operate(operator, a, b) {
    if(operator === "+") {
        add();
    } else if(operator === "-") {
        subtract();
    } else if(operator === "*") {
        multiply();
    } else if(operator === "/") {
        divide();
    } else {
        console.log("Error")
    }    
}

operate();