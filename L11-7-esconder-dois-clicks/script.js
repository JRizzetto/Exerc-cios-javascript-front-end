/*
Level 1, Dificuldade 1:
Objetivo: Criar uma página com um botão. 
Ao ser clicado, o botão deverá alterar o texto e desaparecer após a segunda vez em que for clicado.
*/


const btn = document.getElementById("changeTextButton");
let clickCount = 0;

btn.addEventListener("click", () => {
    clickCount++;

    if(clickCount === 1) {
        btn.innerText = "Texto alterado a primeira vez";
    }else {
        btn.style.display = "none";
    }
})