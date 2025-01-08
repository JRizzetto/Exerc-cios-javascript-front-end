/*
Level 1, Dificuldade 1.

Exercício: Alterar o fundo da página
Objetivo: Criar um botão que, ao ser clicado, mude a cor do fundo da página para uma cor diferente.

HTML: O botão vai ter o texto "Mudar cor de fundo".
CSS: Defina uma cor de fundo inicial para a página (pode ser qualquer cor).
JavaScript: Adicione um evento de clique no botão para alterar a cor do fundo da página.
Passos:
Crie o botão no HTML.
Dê uma cor inicial ao fundo da página com o CSS.
Escreva o código JavaScript que muda a cor de fundo da página ao clicar no botão.
*/

const btn = document.getElementById("changeColorButton");
const body = document.querySelector("body");


// btn.addEventListener("click", () => {
//     body.style.background = "red"
// });

btn.addEventListener("click", () => {
    body.classList.toggle("background-red")
})


