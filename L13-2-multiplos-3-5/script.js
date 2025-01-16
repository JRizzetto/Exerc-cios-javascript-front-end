/*
Level 1, Dificuldade 3, Exercício 2.

Objetivo:
Crie uma aplicação que:

Receba um número inteiro no input.
Liste no navegador todos os múltiplos de 3 e de 5 (separadamente) entre 1 e o número informado.
Mostre uma mensagem de erro se o valor inserido não for um número válido ou se for menor que 1.

*/

const numberInput = document.getElementById("numberInput");
const generateButton = document.getElementById("generateButton");
const errorMessage = document.getElementById("errorMessage");
const multiplesOf3List = document.getElementById("multiplesOf3List");
const multiplesOf5List = document.getElementById("multiplesOf5List");


generateButton.addEventListener("click", () => {
    multiplesOf3List.innerHTML = "";
    multiplesOf5List.innerHTML = "";
    errorMessage.innerText = "";
    
    let valueInput = parseFloat(numberInput.value.trim())

    if(isNaN(valueInput) || valueInput < 1) {
        errorMessage.innerText = "Entre somente com números e maior que 1!"
        return;
    }

    for(let i = 1; i < valueInput; i++) {
        if(i % 3 === 0) {
            const li = document.createElement("li");
            li.innerText = `${i}`
            multiplesOf3List.appendChild(li);
        }if (i % 5 === 0){
            const li = document.createElement("li");
            li.innerText = `${i}`
            multiplesOf5List.appendChild(li);
        }
    }

    numberInput.value = "";
    console.log(multiplesOf5List.value)
})