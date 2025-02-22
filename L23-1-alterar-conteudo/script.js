/*
Nível 2, Dificuldade 3, Exercício 1 - JavaScript
Objetivo: O objetivo agora será trabalhar com manipulação do DOM usando JavaScript. 
O exercício será sobre criar uma interação simples com os elementos da página.

Descrição:
Crie uma página com três botões.
Cada botão deve alterar o conteúdo de um parágrafo diferente quando clicado.
Cada botão terá um texto diferente, e o conteúdo dos parágrafos será alterado com um texto específico.
O código em JavaScript será responsável por capturar o clique nos botões e alterar o conteúdo dos parágrafos.
*/


const para1 = document.getElementById("para1");
const para2 = document.getElementById("para2");
const para3 = document.getElementById("para3");

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");

btn1.addEventListener("click", () => {
    para1.innerText = "O texto 1 foi alterado"
})

btn2.addEventListener("click", () => {
    para2.innerText = "O texto 2 foi alterado"
})

btn3.addEventListener("click", () => {
    para3.innerText = "O texto 3 foi alterado"
})