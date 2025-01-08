/*
Level 1, Dificuldade 1:
Desafio 10: Alterando Estilos Condicionalmente
Objetivo: Alterar os estilos de um elemento ao clicar em um botão e alternar entre duas opções de estilo, com base no número de cliques.

Descrição:

Você tem um botão que, quando clicado, deve alternar o estilo de um texto na página entre duas opções:

Primeiro clique: Mudar a cor do texto para azul e o fundo para amarelo.
Segundo clique: Mudar a cor do texto para verde e o fundo para laranja.
Terceiro clique: Mudar a cor do texto para branco e o fundo para vermelho.
Quarto clique: Retornar para o estado inicial, com o fundo e a cor do texto sendo o padrão do CSS.
*/


const text = document.getElementById("text");
const btn = document.getElementById("changeStyleButton");
let clickCount = 0

btn.addEventListener("click", () => {
    clickCount ++;

    if(clickCount === 1) {
        text.style.color = "blue"
        text.style.background = "yellow"
    }else if(clickCount === 2) {
        text.style.color = "green"
        text.style.background = "orange"
    }else if(clickCount === 3) {
        text.style.color = "white"
        text.style.background = "red"
    }else{
        text.style.color = "black"
        text.style.background = "none"
        clickCount = 0;
    }
})


    

