let firstNum = null
let secondNum = null
let firstOperator = null
let secondOperator = null
let displayValue = 0
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
            } else if(buttons[i].classList.contains("equals")){
                inputEquals()
                updateDisplay()
            }
        })
    }
}

function inputNumber(num) {
    if(firstOperator == null) {
        if(displayValue == 0) {
            displayValue = num
        } else if (displayValue == firstNum) {
            displayValue = num
        } else {
            displayValue += num
        }
    } else {
        if(displayValue == firstNum) {
            displayValue = num
        } else {
            displayValue += num
        }
    }
}

function inputOperator(operator) {
    if(firstOperator == null && secondOperator == null) {
        firstOperator = operator
        firstNum = displayValue
        console.log(firstNum)
        
    } else if(firstOperator != null && secondOperator == null) {
        secondOperator = operator
        secondNum = displayValue
        console.log("second number: " + secondNum)
        result = operate(Number(firstNum), Number(secondNum), operator)
        console.log(result)
        displayValue = result
        firstNum = displayValue
    }
} 

function inputEquals() {
    if(firstOperator == null) {
        displayValue = displayValue
    } else {
       secondNum = displayValue
       result = operate(Number(firstNum), Number(secondNum), firstOperator)
       displayValue = result  
    }
}

function updateDisplay() {
    let display = document.querySelector(".display")
    display.textContent = displayValue
    
}

function clear() {

}


// LMAOOO its because I didn't initialize the i variable 
// function clickButtons() {
//     for(i = 0; i < buttons.length; i++) {
//         buttons[i].addEventListener('click', function() {
//             if(buttons[i].classList.contains("number")) {
//             console.log("you just clicked a number")
//         }
//     })
//     }
// }

clickButtons()