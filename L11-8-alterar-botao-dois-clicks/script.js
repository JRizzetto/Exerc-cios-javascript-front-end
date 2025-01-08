/*
Level 1, Dificuldade 1:
Objetivo: Alternar o texto de um botão após dois cliques.

Tarefa:

O botão começa com o texto "Clique em mim!".
Quando o usuário clica uma vez, o texto se altera para "Você clicou uma vez!".
Quando o usuário clicar novamente, o texto deve mudar para "Você clicou duas vezes!".
*/

const clickBtn = document.getElementById("changeTextButton");
let clickCount = 0;

clickBtn.addEventListener("click", () => {
    clickCount++;

    if(clickCount === 1) {
        clickBtn.innerText = "Você clicou uma vez!"
    }else if (clickCount === 2){
        clickBtn.innerText = "Você clicou duas vezes!"
    }else{
        clickBtn.style.display = "none"
    }
});

