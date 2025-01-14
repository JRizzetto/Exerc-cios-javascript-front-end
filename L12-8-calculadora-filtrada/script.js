/*
Desafio Level 1, Dificuldade 2, Exercício 8
Objetivo:
Crie uma calculadora de média. O usuário deve ser capaz de:

Inserir quantos números quiser (mínimo 2).
Calcular a média de todos os números inseridos.
Requisitos:

Aceite números separados por vírgulas em um input de texto.
Valide para garantir que apenas números sejam aceitos (sem letras ou símbolos, exceto vírgulas).
Mostre a média no final ou um aviso caso a entrada seja inválida.
*/

const input = document.getElementById("numberInput");
const calculateButton = document.getElementById("calculateButton");
const result = document.getElementById("result");

let sum = 0;

calculateButton.addEventListener("click", () => {
    sum = 0

    let textTrim = input.value.trim();
    let numberInput = textTrim.split(/\s*,\s*/).filter(Boolean).map(Number);

    if(numberInput.length >= 2) {
        numberInput.forEach(e => {
            if(!isNaN(e)){
                sum += e
            }else {
                alert("Entre apenas com numeros")
                return 
            }
            return 
        })

        result.innerText = `O resultado é: ${sum / (numberInput.length)}`
    }else{
        alert("O número mínimo de elementos são dois")
        return 
    }
    
    input.value = "";
})





