/*
Level 1, Dificuldade 4, Exercício 9:
Desafio: Contador Reverso (Countdown)
Objetivo: Criar um contador regressivo que, ao clicar em um botão, começa a contagem de segundos até zero. 
O valor do contador é mostrado na tela.

Explicação do que você precisa fazer:
Exibir o contador: Mostre o número inicial (por exemplo, 10) dentro do elemento h2 que tem o id countdown-display.
Função de contagem regressiva:
Quando clicar no botão "Start Countdown", o contador começa a diminuir de 1 em 1 a cada segundo até chegar a zero.
Botão "Pause Countdown": Permita pausar a contagem.
Botão "Reset Countdown": Retorne o contador ao valor inicial (no caso 10).
*/

const countDisplay = document.getElementById("countdown-display");
const startCountdown = document.getElementById("start-countdown");
const pauseCountdown = document.getElementById("pause-countdown");
const resetCountdown = document.getElementById("reset-countdown");


startCountdown.addEventListener("click", () => {
        let count = parseInt(countDisplay.innerText);

        function countDown() {
                countDisplay.innerText = `${count}`

                if(count === 0) {
                        clearInterval(setCount);
                        count = 0;
                }else {
                        count--;
                }
        }

        pauseCountdown.addEventListener("click", () => {
                clearInterval(setCount);
        })

        resetCountdown.addEventListener("click", () => {
                count = 10;
                countDisplay.innerText = count;
        })

        let setCount = setInterval(countDown, 1000);
})
















