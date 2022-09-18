var display = document.querySelector("#display");
var input1 = "";
var operator = "";
var input2 = "";
var equals = "";

function press(element) {
    if(operator === "") {
        input1 += element;
        display.innerText = input1;
    } else {
        input2 += element;
        display.innerText = input2;
    }  
}

function setOP(element) {
    operator = element;
}

function clr() {
    display.innerText = 0;
    operator = "";
    input1 = "";
    input2 = "";
}

function calculate() {
    var x = Number(input1);
    var y = Number(input2);
    if (operator === "+") {
        var plus = x + y;
        display.innerText = plus;
        input1 = "" + plus + "";
        operator = "";
        input2 = "";
    } else if (operator === "-") {
        var minus = x - y;
        display.innerText = minus;
        input1 = "" + minus + "";
        operator = "";
        input2 = "";
    } else if (operator === "*") {
        var times = x * y;
        display.innerText = times;
        input1 = "" + times + "";
        operator = "";
        input2 = "";
    } else if (operator === "/") {
        var divides = x / y;
        display.innerText = divides;
        input1 = "" + divides + "";
        operator = "";
        input2 = "";
    }
}