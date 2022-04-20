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

//Show numbers, operators, and answer on calc
function getDisplay() {
    //first show previousNum
    document.getElementByClassName('previousNum').innerText = previousNum;
    //second show operator
    document.getElementByClassName('operator').innerText = operator;
    //next show currentNum
    document.getElementByClassName('currentNum').innerText = currentNum;
        //show answer on equals

}


const numbers = document.querySelectorAll("buttons.number");
const previousNum = document.querySelector("div.previousNum"); 
const operator = document.querySelectorAll("button.operator");
const currentNum = document.querySelector("div.currentNum"); 
const clearNum = document.querySelector("button.clear");
const deleteNum = document.querySelector("button.delete");
const equals = document.querySelector("button.equals");


numbers.forEach(button => {
    button.addEventListener('click', () => {
        //convert value of button to float
        previousNum = parseFloat(numbers);
        currentNum = parseFloat(numbers);
        //store number in previousNum, then next in currentNum

    })
})

operator.forEach(button => {
    button.addEventListener('click', () => {
        //button value stores value of operator const
        document.getElementsByClassName('operator').innerText = operator;
    })
})

equals.forEach(button => {
    button.addEventListener('click', () => {
        //triggers operate function when button pressed
        operate(operator);
    })
})