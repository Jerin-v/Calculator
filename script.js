let firstNum = null
let secondNum = null
let operator = null
let display = 0
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

function clickButtons() {
    for(let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function() {
            if(buttons[i].classList.contains("number")) {
                console.log("You finally clicked a number")
            } else {
                console.log("You clicked an operand")
            }
        })
    }
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