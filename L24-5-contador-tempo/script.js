/*
Level 2, Dificuldade 4, Exercício 5
Objetivo: Criar um contador de tempo onde o usuário pode iniciar, pausar e resetar o tempo. O tempo deve ser exibido no formato MM:SS e atualizado a cada segundo.

Requisitos do exercício:
O usuário deve conseguir iniciar, pausar e resetar o contador.
O tempo deve ser exibido no formato MM:SS (Minutos e Segundos).
Se o usuário clicar em reset, o tempo deve voltar para 00:00.
O tempo só deve contar quando estiver rodando e deve parar ao pausar.
*/

const timerDisplay = document.getElementById("timer-display");
const start = document.getElementById("start");
const pause = document.getElementById("pause");
const reset = document.getElementById("reset");

let milliCount = 0;
let secondsCount = 55;
let minutsCount = 0;
let timer; // Variável para armazenar o setInterval

function updateDisplay() {
    let formatMilli = milliCount > 9 ? milliCount : `0${milliCount}`;
    let formatSeconds = secondsCount > 9 ? secondsCount : `0${secondsCount}`;
    let formatMinuts = minutsCount > 9 ? minutsCount : `0${minutsCount}`;
    
    timerDisplay.innerHTML = `${formatMinuts}:${formatSeconds}:${formatMilli}`;
}

function milliseconds() {
    milliCount++;
    
    if (milliCount > 99) {
        milliCount = 0;
        seconds();
    }

    updateDisplay();
}

function seconds() {
    secondsCount++;

    if (secondsCount > 59) {
        secondsCount = 0;
        minuts();
    }

    updateDisplay();
}

function minuts() {
    minutsCount++;
    updateDisplay();
}

start.addEventListener("click", () => {
    if (!timer) { // Só inicia se não houver um intervalo rodando
        timer = setInterval(milliseconds, 10);
    }
});



