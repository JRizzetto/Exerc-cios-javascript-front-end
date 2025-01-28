/*
Level 2, Dificuldade 1, Exercício 1:

Objetivo:
Vamos criar um contador simples que aumenta ou diminui o valor de acordo com a interação do usuário. 
Esse exercício vai te ajudar a lidar melhor com a manipulação de números, eventos de interação e manter o estado de um valor na página.

O que este exercício cobre:
Manipulação do DOM para atualizar os valores da página.
Evento de clique para interação com os botões.
Manutenção de um valor na página (o contador) e sua modificação.
Com isso, conseguimos manipular eventos de forma simples, aumentando o entendimento dos conceitos básicos da interação front-end.

Agora você está pronto para começar o exercício, se precisar de algo, me avise! Vamos para o Level 2 com mais força! 🚀

*/

const decrease = document.getElementById("decrease");
const count = document.getElementById("count");
const increase = document.getElementById("increase");
const reset = document.getElementById("reset");

increase.addEventListener("click", () => {
    count.innerText = Number(count.innerText) + 1;
})

decrease.addEventListener("click", () => {
    count.innerText = Number(count.innerText) - 1;
})

reset.addEventListener("click", () => {
    count.innerText = 0;
})