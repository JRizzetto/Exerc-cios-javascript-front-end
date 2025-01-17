/*
Exercício Level 1 - Dificuldade 3 - Exercício 5
Objetivo:
Criar um gerador de cartões com cores aleatórias. O usuário digita o número de cartões que deseja gerar, e os cartões aparecem com diferentes cores e textos.

Requisitos:
O usuário deve inserir no input o número de cartões (ex: "3").
Cada cartão gerado terá:
Uma cor de fundo aleatória.
Um texto indicando sua posição, como "Cartão 1", "Cartão 2", etc.
Exiba uma mensagem de erro caso o número seja inválido ou não esteja entre 1 e 10.
Botão de "Gerar novamente" para reiniciar.
*/

const cardNumber = document.getElementById("cardNumber");
const generateButton = document.getElementById("generateButton");
const errorMessage = document.getElementById("errorMessage");
const cardContainer = document.getElementById("cardContainer");

generateButton.addEventListener("click", () => {
    errorMessage.innerText = "";
    cardContainer.innerHTML = "";
    
    let inputNumber = parseFloat(cardNumber.value.trim());

    if(inputNumber < 1 || inputNumber > 10 ) {
        errorMessage.innerText = "Entre somente com número de 1 a 10" 
        return
    }
  
    for(let i = 0; i < inputNumber; i++) {
        const divCard = document.createElement("div");
        divCard.classList.add("card");
        divCard.style.background = `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`;
        cardContainer.appendChild(divCard);

        const pText = document.createElement("p");
        pText.innerText = `Cartão ${i}`
        divCard.appendChild(pText);
    }

    cardNumber.value = "";
})

