/*
Level 1, Dificuldade 2:
Desafio: Controle de Visibilidade 🚨
Objetivo: Você deve criar um botão que alterna a visibilidade de um parágrafo na tela. Quando o botão é clicado:

O parágrafo desaparece se estiver visível.
O parágrafo reaparece se estiver escondido.
O texto do botão muda para "Esconder" ou "Mostrar" conforme necessário.
*/

const text = document.getElementById("text");
const btn = document.getElementById("toggleButton");

btn.addEventListener("click", () => {
    let resultText = text.classList.toggle("hidden");

    btn.innerText = resultText ? "Mostrar" : "Esconder";
})



    

