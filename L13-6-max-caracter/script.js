/*
Level 1, Dificuldade 3, Exercício 6: Sistema de Contagem de Caractere com Limitação
Neste exercício, você criará um sistema para contar caracteres digitados em um campo de texto. 
O usuário terá uma limitação de caracteres, que deverá ser indicada dinamicamente no momento da digitação.

Requisitos do Exercício
O usuário verá um campo de texto (input de tipo "text") onde poderá digitar.
Ao digitar, a quantidade de caracteres utilizados será exibida em tempo real.
Se o limite for atingido (e.g., 50 caracteres), o campo ficará com uma borda vermelha e o texto "Limite atingido!" será exibido.
Caso o usuário delete caracteres, o sistema deverá atualizar e voltar ao estado normal se estiver abaixo do limite.
*/

const textInput = document.getElementById("textInput");
const charCount = document.getElementById("charCount");
const warningMessage = document.getElementById("warningMessage");

textInput.addEventListener("input", () => {
    let inputCount = textInput.value.length;

    charCount.innerText = `${inputCount}/50 caracteres usados`;

    if(inputCount >= 50) {
        textInput.classList.toggle("error");
        warningMessage.style.display = "block";
        warningMessage.innerText = "O limite foi atingido";
    }else {
        textInput.classList.remove("error");
        warningMessage.style.display = "none";
        warningMessage.innerText = "";
    }
})

