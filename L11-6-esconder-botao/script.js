/*
Desafio Level 1, Dificuldade 1:
Objetivo: Criar uma página com um botão que, ao ser clicado, muda o texto do botão para "Texto alterado!" e esconde o botão da página.
*/

const btn = document.getElementById("hideButton");

btn.addEventListener("click", () => {
    btn.innerText = "Texto alterado!";
    btn.style.display = "none";
})
