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
let addDigits = '';
let inputOp = 0;
let answer = 0;
let displayNum = '';
let currentValue = '';

// Stores number value from button pressed
numbers.forEach((number) => {
    number.addEventListener('click', () => {
        currentValue += number.id
        console.log(currentValue);
        inputNum = number.id;
        displayNum += `${inputNum}`;
        displayNumber();
    });
});

//stores operator pressed and changes current value to previous value
operator.forEach((op) => {
    op.addEventListener('click', () => {
        inputOp = op.id;
        displayNum += ` ${inputOp} `;
        currentValue = '';
        //displayOp();
        displayNumber();
    });
});
//triggers operate function, finds answer of 2 numbers entered and operator
equals.addEventListener('click', () => {
    operate();
    if (answer === NaN || answer === Infinity) {
        answer = 'Error';
        displayAnswer(answer);
    } else {
        displayAnswer(answer);
    }
    //Get answer to display correctly after 
    displayNum = answer;

});

deleteNum.addEventListener('click', () => {
    //Remove whatever last display char was
    //displayNum slice lasy char and reassign
    firstNumber = firstNumber.toString();
    firstNumber = (firstNumber.slice(0, -1));

    document.getElementById('currentNum').innerText = firstNumber;
})

//removes numbers and ops from diaply and all values go back to 0
clearNum.addEventListener('click', () => {
    //Rework clear with new vars
    firstNumber = 0;
    secondNumber = 0;
    inputOp = 0;
    document.getElementById('previousNum').innerText = '';
    document.getElementById('currentNum').innerText = 0;
})

//Takes operator and 2 numbers and returns answer
function operate() {
    let mathChar = displayNum.split(' ');
    console.log(mathChar);
    let runningTotal = null;
    let ops = '+-x÷%'
    //['12', '+', '2']
    mathChar.forEach((char, i, mathChar) => {
        if (runningTotal === null) {
            runningTotal = Number(char);
        } else {
            if (ops.includes(char) === false) {
                switch (mathChar[i - 1]) {
                    case '+':
                        runningTotal += Number(char);
                        break
                    case '-':
                        runningTotal -= Number(char);
                        break
                    case 'x':
                        runningTotal *= Number(char);
                        break
                    case '÷':
                        runningTotal /= Number(char);
                        break
                    case '%':
                        runningTotal = runningTotal / 100;
                    default:
                        return
                }
            }

        }

    })
    answer = runningTotal;

}

//Display Functions
function displayAnswer() {
    document.getElementById('currentNum').innerText = answer;
    document.getElementById('previousNum').innerText = '';
}

function displayNumber() {
    //add first number pressed to display div
    document.getElementById('currentNum').innerText = (`${displayNum}`);
}