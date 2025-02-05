/*
Level 2 - Dificuldade 2 - Exercício 3. 
O objetivo é que você implemente o JavaScript para contar o número de caracteres 
digitados na textarea em tempo real e atualizar o valor exibido no 
<span id="charCount">0</span>.
*/

const textInput = document.getElementById("textInput");
const charCount = document.getElementById("charCount");

textInput.addEventListener("input", () => {
    charCount.innerText = textInput.value.length;

})



