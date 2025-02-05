/*
Level 2 - Dificuldade 2 - Exercício 2:

Gerar um número aleatório entre 1 e 100.
Verificar se o palpite do usuário está correto, alto ou baixo.
Exibir uma mensagem apropriada no parágrafo com o ID message.
*/

const guessInput = document.getElementById("guessInput");
const checkButton = document.getElementById("checkButton");
const message = document.getElementById("message");

let randomNumber = parseInt(Math.random()*100);
console.log(randomNumber);

checkButton.addEventListener("click", () => {
    let valueInput = Number(guessInput.value);

    if(valueInput == "") {
        alert("O input não pode ser vazio!");
        return;
    }

    if(valueInput < randomNumber) {
        alert("Chute um número MAIOR!")
    }else if(valueInput > randomNumber) {
        alert("Chute um número MENOR!")
    }else if(valueInput === randomNumber) {
        alert(`Parabéns, você acertou!\nO número aleatório é: ${randomNumber}`);
        location.reload();
    }

    guessInput.value = "";
});



