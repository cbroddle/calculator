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
    answer = a + b;
    return answer;
};

//Function subtracts 2nd number from 1rst
function subtract(a, b) {
    answer = a - b;
    return answer;
};

//Func multiples 2 numbers
function multiply(a, b) {
    answer = a * b;
    return answer;
};

//Func divides 1rst number by 2nd
function divide(a, b) {
    answer = a/b;
    return answer;
};

//Takes operator and 2 numbers and calls function to match given operator
function operate(operator, a, b) {
    if(operator === "+") {
       answer = add(a, b);
       console.log(answer);
    } else if(operator === "-") {
        answer = subtract(a, b);
        console.log(answer);
    } else if(operator === "*") {
        answer = multiply(a, b);
        console.log(answer);
    } else if(operator === "/") {
        answer = divide(a, b);
        console.log(answer);
    } else {
        console.log("Error")
    }    
}

operate(operator, a, b); 