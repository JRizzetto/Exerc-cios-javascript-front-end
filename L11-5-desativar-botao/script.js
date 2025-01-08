/*
Level 1, Dificuldade 1:
Objetivo: 
Criar uma página com um botão que, ao ser clicado, altere o texto do botão para "Você clicou!" e desative o botão.
*/

document.getElementById("clickButton").onclick = function () {
    const btn = document.getElementById("clickButton");

    btn.innerHTML = "Você clicou!"
    btn.disabled = true
}

/////////////////////////////////////////////////////////

const btn = document.getElementById("clickButton");
btn.addEventListener("click", () => {
    btn.innerHTML = "Você clicou!"
    btn.disabled = true
})

