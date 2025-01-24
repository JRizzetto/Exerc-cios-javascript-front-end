/*
Level 1 - Dificuldade 4 - Exercício 5: Timer Dinâmico
Objetivo
Crie um cronômetro dinâmico com opções para iniciar, pausar e reiniciar o tempo. Exiba os segundos que passam na tela.
*/


const timerDisplay = document.getElementById("timer-display");
const startTimer = document.getElementById("start-timer");
const pauseTimer = document.getElementById("pause-timer");
const resetTimer = document.getElementById("reset-timer");

let countSeconds = 0;
let countMinutes = 0;
let countHours = 0;

startTimer.addEventListener("click", () => {
        
        function updateCounter() {
                let countSecond = countSeconds < 10 ? `0${countSeconds}` : countSeconds;
                let countMinute = countMinutes < 10 ? `0${countMinutes}` : countMinutes;
                let countHour = countHours < 10 ? `0${countHours}` : countHours;

                countSeconds++;
                timerDisplay.innerText = `${countHour}:${countMinute}:${countSecond}`

                if(countSeconds == 60) {
                        countSeconds = 0;
                        countMinutes++
                }
                if(countMinutes == 60) {
                        countMinutes = 0;
                        countHours++ 
                }
        }

        let intervalCurrent = setInterval(updateCounter, 1000);

        pauseTimer.addEventListener("click", () => {
                if(intervalCurrent) {
                        clearInterval(intervalCurrent);
                        intervalCurrent = null;
                }
        })

        resetTimer.addEventListener("click", () => {
                clearInterval(intervalCurrent);
                countSeconds = 0;
                countMinutes = 0;
                countHours = 0;
                timerDisplay.innerText = "00:00:00"
        })
})










