/*
Level 1, Dificuldade 2:
Desafio: Contador com Reset
Objetivo:
Você vai criar um contador que:

Incrementa o número exibido a cada clique em um botão de "Adicionar".
Um botão de "Resetar" define o número de volta para zero.
*/

const addButton = document.getElementById("addButton");
const countResult = document.getElementById("counter");
const resetButton = document.getElementById("resetButton");

let clickCoount = 0;

addButton.addEventListener("click", () => {
    clickCoount++;
    countResult.innerHTML = `${clickCoount}`;    
})

resetButton.addEventListener("click", () => {
    clickCoount = 0;
    countResult.innerHTML = `${clickCoount}`;
})


    

