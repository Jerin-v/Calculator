let firstNum = null
let secondNum = null
let operator = null
let secondOperator = null
let displayValue = 0
let shouldResetScreen = false
let buttons = document.querySelectorAll("button")


function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    if(b == 0) {
        return "invalid"
    }
    return a / b
}

//could condense function but i'll focus on getting everything to work first
function operate(a, b, op) {
    if(op == "+") {
        return add(a, b)
    }
    if(op == "-") {
        return subtract(a, b)
    }
    if(op == "*") {
        return multiply(a, b)
    }
    if(op == "/") {
        return divide(a, b)
    }
}

updateDisplay()

function clickButtons() {
    for(let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function() {
            if(buttons[i].classList.contains("number")) {
                inputNumber(buttons[i].value)
                updateDisplay()
            } else if (buttons[i].classList.contains("operator")) {
                inputOperator(buttons[i].value)
                updateDisplay()
            } else if(buttons[i].classList.contains("equals")){
                inputEquals()
                updateDisplay()
            } else if(buttons[i].classList.contains("clear")) {
                clear()
                updateDisplay()
            }
        })
    }
}

function inputNumber(num) {
    if(displayValue == 0 || shouldResetScreen) {
    resetScreen()
    }
    displayValue += num
    
}

function inputOperator(op) {
    if(operator != null) evaluate()
    firstNum = displayValue
    operator = op
    shouldResetScreen = true
}

function evaluate() {
    secondNum = displayValue
    displayValue = operate(Number(firstNum), Number(secondNum), operator)
    operator = null
}

function inputEquals() {
    if(operator == null) {
        displayValue = displayValue
    } else {
       secondNum = displayValue
       result = operate(Number(firstNum), Number(secondNum), operator)
       displayValue = result
       firstNum = displayValue //always sets firstNum to solution of first two numbers 
       operator = null
    }
}

function resetScreen() {
    displayValue = ""
    shouldResetScreen = false
}

function updateDisplay() {
    let display = document.querySelector(".display")
    display.textContent = displayValue
}

function clear() {
    displayValue = 0
    firstNum = null
    secondNum = null
    firstOperator = null
    secondOperator = null
    result = null
}

clickButtons()