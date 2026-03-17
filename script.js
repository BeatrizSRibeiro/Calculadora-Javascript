let display = document.getElementById("display")
let currentInput = ""
let currentOperacao = ""


function inserir_numero(value){
    currentInput += value
    display.textContent = currentInput
}

function inserir_operador(operator){
    if (currentInput === "" && operator !== ".")return
    currentInput += operator;
    display.textContent = currentInput;

}

function calcular(){
    try{
        let result = eval(currentInput)
        if(!Number.isInteger(result)){
            result = result.toFixed(2)
        }
        currentInput = result;
        display.textContent = currentInput;
       }   catch(erro){
            display.textContent = currentInput;
            currentInput = "";
        }

}

function limpar(){
    currentInput = "";
    display.textContent = currentInput;
}