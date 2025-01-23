/*
Exercício 3 - Dificuldade 4 (Level 1)
Simulador de Luz e Escuro
Crie um sistema simples de "Modo Claro" e "Modo Escuro".
O usuário deve poder alternar entre esses modos ao clicar em um botão.

Requisitos
Um botão que alterna os modos (Texto no botão: "Alternar Modo").
No modo claro:
Cor de fundo: branca.
Cor do texto: preta.
No modo escuro:
Cor de fundo: preta.
Cor do texto: branca.
*/


const body = document.querySelector("body");
const toggleMode = document.getElementById("toggle-mode");

toggleMode.addEventListener('click', () => {
        body.classList.toggle('dark-mode');

        const currentBackground = getComputedStyle(body).backgroundColor;
        console.log(currentBackground);
})










