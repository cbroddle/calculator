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
let inputOp = 0;
let answer = 0;
let displayNum = ''; //Updated after any button is clicked
let currentValue = ''; //Gets reassigned after every Operator click 
let decimalCount = 0;

// Stores number value from button pressed
numbers.forEach((number) => {
    number.addEventListener('click', () => {
        currentValue += number.id
        inputNum = number.id;
        displayNum += `${inputNum}`;
        displayNumber();
    });
});

decimal.addEventListener('click', () => {
    decimalCount++;
    disableDecimal();
});


// Stores operator pressed and changes current value to previous value
operator.forEach((op) => {
    op.addEventListener('click', () => {
        inputOp = op.id;
        displayNum += ` ${inputOp} `;
        currentValue = '';
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
    //Get answer to display correctly after multiple calcs
    //How to calc the numbers in display?

});

deleteNum.addEventListener('click', () => {
    //Remove whatever last display char was
    displayNum = (displayNum.slice(0, -1));
    displayNumber();
    //Have to press Del 2x to remove spaces?
})

//removes numbers and ops from disaply and all values go back to 0
clearNum.addEventListener('click', () => {
    displayNum = '';
    currentValue = '';
    inputOp = 0;
    answer = 0;
    displayZero(); 
    //manually sets display to show '0' without adding to vars
    //ex: '012', shows '0', then '12'
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
                        runningTotal = Number(char) / 100;
                    default:
                        return
                }
            }

        }

    })
    answer = runningTotal;

}

//Display Functions

function disableDecimal() {
    //if inputNum has one '.' ,change number.id to '';
    if(decimalCount === 1){
        decimal.id = '';
     }
}

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