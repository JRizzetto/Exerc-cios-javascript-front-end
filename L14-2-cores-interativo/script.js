/*
Level 1 - Dificuldade 4 - Exercício 2: 

Criando um Seletor de Cores Interativo

Objetivo: Construir um pequeno aplicativo que permita ao usuário selecionar uma cor e, ao clicar em um botão, mude a cor de fundo da página para a cor selecionada.

Como funciona:

O usuário escolhe uma cor no input.
Ao clicar no botão, a função mudarCor() é executada.
A função pega o valor da cor selecionada.
A cor de fundo da página é alterada para a cor escolhida.
Desafios adicionais:

Paleta de cores: Crie uma lista de cores predefinidas e permita que o usuário escolha entre elas.
Histórico de cores: Armazene as cores escolhidas pelo usuário em um array e permita que ele navegue entre elas.
Aleatoriedade: Crie um botão para gerar uma cor aleatória.
Personalização: Permita que o usuário escolha qual elemento da página terá sua cor alterada.
*/

const corSelecionada = document.getElementById("corSelecionada");
const body = document.querySelector("body");
const paletaCores = document.getElementById("paletaCores");

let choiseColor = 0;

function mudarCor() {
    const inputCollor = corSelecionada.value;
    body.style.background = inputCollor;
    return
}

function corPreferida() {
    const arrayColor = Array.from(paletaCores.children);
    arrayColor[choiseColor].style.background = corSelecionada.value;
    choiseColor++;

    if(choiseColor == arrayColor.length) {
        choiseColor = 0;
    }

    arrayColor.forEach(e => {
        e.addEventListener("mouseover", () => {
            e.style.transform = 'scale(1.2)';
            e.style.cursor = "pointer"
        })
    })
    
    arrayColor.forEach(e => {
        e.addEventListener("mouseout", () => {
            e.style.transform = 'scale(1)';
        })
    })
    
    arrayColor.forEach((e, index) => {
        e.addEventListener("click", () => {
            body.style.background = arrayColor[index].style.backgroundColor;
        })
    })
}

function corAleatoria() {
    body.style.background = `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`
}













