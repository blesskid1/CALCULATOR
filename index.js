let numEl = document.getElementById("num-el")
let resultEl = document.getElementById("result-el")
let operator = ""
let number = 0

function erase() {
    let currentValue = numEl.value;
    numEl.value = currentValue.slice(0, -1);
}

function cancel() {
    numEl.value = "";
    resultEl.value = "";
    operator = "";
    number = 0;
}

function percentage() {
    numEl.value = parseFloat(numEl.value) / 100;
}

function divide() {
    number = parseFloat(numEl.value);
    operator = "/";
    numEl.value = "";
}

function seven() {
    numEl.value += "7";
}

function eight() {
    numEl.value += "8";
}

function nine() {
    numEl.value += "9";
}

function multiply() {
    number = parseFloat(numEl.value);
    operator = "*";
    numEl.value = "";
}

function four() {
    numEl.value += "4";
}

function five() {
    numEl.value += "5";
}

function six() {
    numEl.value += "6";
}

function minus() {
    number = parseFloat(numEl.value);
    operator = "-";
    numEl.value = "";
}

function one() {
    numEl.value += "1";
}

function two() {
    numEl.value += "2";
}

function three() {
    numEl.value += "3";
}

function plus() {
    number = parseFloat(numEl.value);
    operator = "+";
    numEl.value = "";
}

function plusOrMinus() {
    numEl.value = parseFloat(numEl.value) * -1;
}

function zero() {
    numEl.value += "0";
}

function point() {
    if (!numEl.value.includes(".")) {
        numEl.value += ".";
    }
}

function equal() {
    let secondNumber = parseFloat(numEl.value);
    let result;

    switch(operator) {
        case "+":
            result = number + secondNumber;
            break;
        case "-":
            result = number - secondNumber;
            break;
        case "*":
            result = number * secondNumber;
            break;
        case "/":
            result = secondNumber !== 0 ? number / secondNumber : "Error";
            break;
        default:
            return;
    }

    resultEl.value = result;
    numEl.value = result;
    operator = "";
    number = result;
}