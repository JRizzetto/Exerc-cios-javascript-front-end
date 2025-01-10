/*
Level 1, Dificuldade 2:
Crie um contador de caracteres para um campo de texto. Ele deve funcionar assim:

Um campo de texto (textarea) permite que o usuário escreva.
Um elemento exibe o número atual de caracteres digitados.
Caso o usuário exceda um limite de 100 caracteres, exiba uma mensagem alertando que o limite foi atingido.
Requisitos:
Exiba dinamicamente o número de caracteres conforme o usuário digita.
Limite o campo para permitir, no máximo, 100 caracteres.
Quando atingir o limite, adicione uma mensagem visual que oriente o usuário (pode ser uma mensagem abaixo do campo ou uma alteração na borda do campo).
*/

const textInput = document.getElementById("textInput");
const charCount = document.getElementById("charCount");
const warningMessage = document.getElementById("warningMessage");

console.log(textInput)
textInput.addEventListener("input", () => {
    let result = textInput.value.length;

    charCount.innerText = `Caracteres: ${result}/100`;

    

    if(result >= 100) {
        warningMessage.style.display = "block";
        textInput.disabled = true;
    }
})
    

