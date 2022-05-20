const numbers = document.querySelectorAll(".number");
const previousNum = document.querySelector("div.previousNum");
const operator = document.querySelectorAll("button.operator");
const currentNum = document.querySelector("currentNum");
const clearNum = document.querySelector("button.clear");
const deleteNum = document.querySelector("button.delete");
const equals = document.querySelector("button.equals");
const decimal = document.getElementById(".");

//Vars should keep track of each value being input
let inputNum = 0;
let answer = 0;
let displayNum = ''; //Updated after any button is clicked
let currentValue = ''; //Gets reassigned after every Operator click 
let decimalCount = false;

// Stores number value from button pressed
numbers.forEach((number) => {
    number.addEventListener('click', () => {
        if ((number.id == '.' && !decimalCount) || number.id !== '.') {
            currentValue += number.id
            inputNum = number.id;
            displayNum += `${inputNum}`;
            displayNumber();
        }
    });
});

decimal.addEventListener('click', () => {
    // Use boolean var, check if decimal present
    if (decimalCount === false) {
        decimalCount = true;
    }
});

// Stores operator pressed and changes current value to previous value
operator.forEach((op) => {
    op.addEventListener('click', () => {
        let lastChar = displayNum[displayNum.length - 2];
        //if last char is not an operator then continue
        //check for space using index -2
        if (lastChar !== op.id) {
            let inputOp = op.id;
            displayNum += ` ${inputOp} `;
            currentValue = '';
            decimalCount = false;
            displayNumber();
        };
        //need more conditions for % to run
        if (op.id === "%") {
            percentCalc();
            
        };
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
    displayNum = '';
    //Get answer to display correctly after multiple calcs

});

deleteNum.addEventListener('click', () => {
    //Remove whatever last display char was
    //let tempDisplay = displayNum.split(' ').join('');
    let deletedChar;
    if (displayNum[displayNum.length - 1] === ' ') {
        deletedChar = displayNum[displayNum.length - 2];
        displayNum = displayNum.slice(0, -2);
    } else {
        deletedChar = displayNum[displayNum.length - 1];
        displayNum = displayNum.slice(0, -1);
    }
    if (deletedChar === '.') {
        decimalCount = false;
    }
    if (displayNum === '') {
        //displays 0 if all chars deleted
        displayZero();
    } else {
        //displays chars that have not been deleted
        displayNumber();
    };
})

//removes numbers and ops from display and all values go back to 0
clearNum.addEventListener('click', () => {
    displayNum = '';
    currentValue = '';
    answer = 0;
    decimalCount = false;
    displayZero();
    //manually sets display to show '0' without adding to vars
    //ex: '012', shows '0', then '12'
})

function percentCalc() {
    let percentChar = displayNum.split(' ');
    percentChar = percentChar.slice(0, -2);
    console.log(percentChar);
    currentValue = percentChar / 100;
    console.log(currentValue, 'currentValue');
    displayNum = currentValue;
    displayNumber();
}

//Takes operator and 2 numbers and returns answer
function operate() {
    let mathChar = displayNum.split(' ');
    if (mathChar[0] === ' ') {
        mathChar = mathChar.slice(1);
    };
    console.log(mathChar); //shows array of numbers and operator
    let runningTotal = null;
    let ops = '+-x÷'
    //['12', '+', '2']
    mathChar.forEach((char, i, mathChar) => {
        if (runningTotal === null) {
            runningTotal = Number(char);
        } else if (mathChar[0] === '') {
            runningTotal = Number(answer);
            mathChar[0] = runningTotal;
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
                        runningTotal = Number(char) / 100;
                        break
                    default:
                        return
                }
            }

        }

    })
    answer = runningTotal;
}

//Display Functions

function displayZero() {
    document.getElementById('currentNum').innerText = '0';
}

function displayAnswer() {
    document.getElementById('currentNum').innerText = `${answer}`;
}

function displayNumber() {
    //add first number pressed to display div
    document.getElementById('currentNum').innerText = (`${displayNum}`);
}