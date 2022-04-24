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

const numbers = document.querySelectorAll("button.number");
const previousNum = document.querySelector("div.previousNum"); 
const operator = document.querySelectorAll("button.operator");
const currentNum = document.querySelector("currentNum"); 
const clearNum = document.querySelector("button.clear");
const deleteNum = document.querySelector("button.delete");
const equals = document.querySelector("button.equals");

let currentNumber = '';

function getNumber() {
    currentNumber = 1; 
}

numbers.addEventListener('click', function() {
    //currentNumber should equal value of button pressed
     getNumber();
    console.log(currentNumber);
})



