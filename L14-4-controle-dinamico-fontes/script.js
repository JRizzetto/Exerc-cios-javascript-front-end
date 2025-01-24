/*
Level 1 - Dificuldade 4 - Exercício 4: "Controle Dinâmico de Fontes"
Neste exercício, você irá criar uma página simples onde o usuário pode aumentar, diminuir ou resetar o tamanho da fonte de um texto clicando em botões. 
O foco aqui é manipular estilos dinamicamente.
*/


const text = document.getElementById("text");
const increaseFont = document.getElementById("increase-font");
const resetFont = document.getElementById("reset-font");
const decreaseFont = document.getElementById("decrease-font");

let currentFont = 16;

increaseFont.addEventListener("click", () => {
        currentFont += 6;
        text.style.fontSize = `${currentFont}px`
})

resetFont.addEventListener("click", () => {
        currentFont = 16;
        text.style.fontSize = `${currentFont}px`
})

decreaseFont.addEventListener("click", () => {
        if(currentFont > 10) {
                currentFont -= 6;
                text.style.fontSize = `${currentFont}px`    
        }
})








