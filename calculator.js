const numbers = document.querySelectorAll(".number");
const previousNum = document.querySelector("div.previousNum"); 
const operator = document.querySelectorAll("button.operator");
const currentNum = document.querySelector("currentNum"); 
const clearNum = document.querySelector("button.clear");
const deleteNum = document.querySelector("button.delete");
const equals = document.querySelector("button.equals");
const decimal = document.querySelector("button.decimal")

let firstNumber = 0;
let secondNumber = 0;
let inputNum = 0;
let addDigits = '';
let inputOp = 0;
let answer = 0;

// Stores number value from button pressed
numbers.forEach((numbers) => {
 numbers.addEventListener('click',() => {
    if(numbers.id === '.'){
        inputNum = numbers.id.toString();
        appendDecimal();
     } else {
        inputNum = parseInt(numbers.id);
        firstNumber = (firstNumber * 10) + inputNum;
        displayNumber(firstNumber);
     }
    
  });
});

//adds decimal point to number when btn pressed
/*decimal.addEventListener('click', () => {
    appendDecimal();
    firstNumber = firstNumber.toString();
    
    if(firstNumber.includes('.')){
        firstNumber = (firstNumber / 100) + '.' + inputNum;
    } 
    console.log(firstNumber);
})*/

//stores operator pressed and changes current value to previous value
operator.forEach((operator) => {
    operator.addEventListener('click',() => {
        inputOp = operator.id;
        displayOp();
        secondNumber = firstNumber;
        firstNumber = 0;
    });
});
//triggers operate function, finds answer of 2 numbers entered and operator
equals.addEventListener('click',() => {
    operate(inputOp, firstNumber, secondNumber);
    if(answer === NaN || answer === Infinity) {
        answer = 'Error';
        displayAnswer(answer);
    } else {
        displayAnswer(answer);
    }
       
});

deleteNum.addEventListener('click', () => {
    firstNumber = firstNumber.toString();
    firstNumber = (firstNumber.slice(0, -1));
    document.getElementById('currentNum').innerText = firstNumber;
    //Does not work with inputOp
})

//removes numbers and ops from diaply and all values go back to 0
clearNum.addEventListener('click', () => {
    firstNumber = 0;
    secondNumber = 0;
    inputOp = 0;
    document.getElementById('previousNum').innerText = '';
    document.getElementById('currentNum').innerText = 0;
})

//Takes operator and 2 numbers and returns answer
function operate(inputOp, firstNumber, secondNumber) {
    
    switch (inputOp) {
        case '+':
            answer = secondNumber + firstNumber;
            break
        case '-':
            answer = secondNumber - firstNumber;
            break
        case 'x':
            answer = secondNumber * firstNumber;
            break
        case '÷':
            answer = secondNumber / firstNumber;
            break
        case '%':
            answer = secondNumber / 100;
        default:
            return
    }
}

//Display Functions
function displayAnswer() {
    document.getElementById('currentNum').innerText = answer;
    document.getElementById('previousNum').innerText = '';
}

function displayOp() {
    document.getElementById('previousNum').innerText = (`${firstNumber} ${inputOp}`);
    document.getElementById('currentNum').innerText = '';
}

function appendDecimal() {
    document.getElementById('currentNum').innerText += inputNum;
}

function displayNumber() {
    //add first number pressed to display div
    document.getElementById('currentNum').innerText = (`${firstNumber}`);
}