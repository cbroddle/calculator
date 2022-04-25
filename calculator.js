//Takes operator and 2 numbers and returns answer
function operate(operator, previousNum, currentNum) {
    let answer 
    const prev = parseFloat(this.previousNum)
    const current = parseFLoat(this.currentNum)
    if (isNaN(prev) || isNaN(current)) return "Error"
    switch (this.operator) {
        case '+':
            answer = prev + current
            break
        case '-':
            answer = prev - current
            break
        case 'x':
            answer = prev * current
            break
        case '÷':
            answer = prev / current
            break
        default:
            return
    }
    
}

const numbers = document.querySelectorAll(".number");
const previousNum = document.querySelector("div.previousNum"); 
const operator = document.querySelectorAll("button.operator");
const currentNum = document.querySelector("currentNum"); 
const clearNum = document.querySelector("button.clear");
const deleteNum = document.querySelector("button.delete");
const equals = document.querySelector("button.equals");

let firstNumber = 0;
let secondNumber = 0;
let inputNum = 0;

// Stores number value from button pressed
numbers.forEach((numbers)=>{
 numbers.addEventListener('click',() => {
    inputNum = parseInt(numbers.id);
    firstNumber = (firstNumber * 10) + inputNum;
    displayNumber(firstNumber);
  });
});

function displayNumber(pressedNumber) {
    //add first number pressed to display div
    document.getElementById('currentNum').innerText = firstNumber;
    
}
