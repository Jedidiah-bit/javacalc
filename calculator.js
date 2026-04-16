let firstnumber = document.querySelector("#Num1").value;
let secondnumber = document.querySelector("#Num2").value;
let symbol = document.querySelector("#symbol").value;
let result = document.querySelector("#resultArea").value;
 function subtract(){
    result = firstNumber - secondNumber
    resultArea.innerText = result
}
function main(){
    if (symbol=='-'){
        subtract();
    }
    else if (symbol=='x'){
        mul();
    }
}