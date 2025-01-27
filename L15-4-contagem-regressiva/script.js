/*
Exercício 4 de Level 1, Dificuldade 5, focado em front-end.

Objetivo
Criar uma contagem regressiva com um valor configurável em HTML, CSS e JavaScript.

Descrição
Crie um input numérico onde o usuário pode definir o tempo da contagem regressiva em segundos.
Quando o botão "Iniciar" for pressionado, a contagem regressiva começa a partir do valor definido pelo usuário.
Crie um botão de reset, que permita redefinir o tempo para o valor inicial configurado pelo usuário.
O valor da contagem regressiva precisa ser atualizado em tempo real, de segundo a segundo.
Se a contagem chegar a zero, exiba a mensagem "Tempo Esgotado!".
*/

const timerInput = document.getElementById("timer-input");
const startBtn = document.getElementById("start-btn");
const resetBtn = document.getElementById("reset-btn");
const timerDisplay = document.getElementById("timer-display");

// timerInput.addEventListener("input", () => {
//     startBtn.addEventListener("click", () => {
//         console.log(timerInput.value);
//     })
// })

startBtn.addEventListener("click", () => {
        let integerInput = parseInt(timerInput.value);
        
        function countSubtraction() {
            integerInput = integerInput - 1;
            timerDisplay.innerText = integerInput;

            if(integerInput == 0) {
                alert("Tempo Esgotado!");
                return;
            }
        }
        let currentSeconds = setInterval(countSubtraction, 1000);

        timerInput.innerHTML = ""; 
})














