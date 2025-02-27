/*
Level 2 - Dificuldade 1 - Exercício 4
Objetivo: Criar um menu dropdown interativo que abre e fecha ao clicar em um botão.

Requisitos:
Deve haver um botão para abrir/fechar o menu.
O menu deve ter três opções.
O menu deve desaparecer ao clicar fora dele.
Use classList.toggle() para mostrar/ocultar o menu.

Agora implemente o JavaScript (script.js) para:

Abrir/fechar o menu ao clicar no botão.
Fechar o menu se clicar fora dele.
*/

const menuButton = document.getElementById("menuButton");
const menu = document.getElementById("menu");

menuButton.addEventListener("click", (event) => {
    menu.classList.toggle("hidden");
    event.stopPropagation();
})

document.addEventListener("click", (event) => {
    if(!menu.classList.contains("hidden") && event.target !== menuButton) {
        menu.classList.add("hidden");
    }
})




