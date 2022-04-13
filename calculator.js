
const num1 = document.getElementByClass("Number").addEventListener("click"); //Enter 1rst number
//Choose operator, see function below
const operator = document.getElementByClass("operator").addEventListener("click");
const num2 = document.getElementByClass("Number").addEventListener("click"); //Enter 2nd number
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