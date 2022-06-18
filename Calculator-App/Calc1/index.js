var num1 = 8;
var num2 = 4;

document.getElementById("num1-el").innerHTML = num1;
document.getElementById("num2-el").innerHTML = num2;

function add(){
    document.getElementById("result-el").innerHTML = "result: " + (num1 + num2);

}

function subtract(){
    document.getElementById("result-el").innerHTML = "result: " + (num1 - num2);

}

function multiply(){
    document.getElementById("result-el").innerHTML = "result: " + (num1 * num2);

}

function divide(){
    document.getElementById("result-el").innerHTML = "result: " + (num1 / num2);

}