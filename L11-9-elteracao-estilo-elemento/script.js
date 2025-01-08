/*
Level 1, Dificuldade 1:
Alteração de Estilo de um Elemento com Clique:

Objetivo: Criar uma interação onde, ao clicar em um botão, você muda o estilo de um texto. 

O botão deve alterar a cor de fundo do texto para uma cor aleatória sempre que for clicado. 

Também, se o botão for clicado 3 vezes, a cor de fundo do texto deve voltar à cor original (lightgray).
*/

const text = document.getElementById("text");
const btn = document.getElementById("changeStyleButton");
let clickCount = 0
btn.addEventListener("click", () => {
    clickCount++;
    
    let red = parseInt(Math.random()*255)
    let green = parseInt(Math.random()*255)
    let blue = parseInt(Math.random()*255)

    if(clickCount === 3) {
        text.style.background = "lightgray"
    }else{
        text.style.background = `rgb(${red}, ${green}, ${blue})`
    }
})



    

