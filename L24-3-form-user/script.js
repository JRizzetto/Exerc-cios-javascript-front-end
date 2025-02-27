/*
Level 2, Dificuldade 4, Exercício 3.

Proposta do Exercício:
Objetivo: Criar um contador de cliques em um botão, mas com a adição de uma condição extra. 
O contador deve resetar quando o número de cliques atingir 10, e um alerta deve ser disparado indicando que o limite foi atingido.

Requisitos:

Crie um botão que, quando clicado, aumenta o contador.
O contador deve ser mostrado em tempo real.
Se o número de cliques atingir 10, o contador deve resetar para 0 e um alerta deve ser exibido.
Utilize JavaScript para controlar a lógica, HTML para estruturar e CSS para estilizar a página.
*/

const clickButton = document.getElementById("clickButton");
const counter = document.getElementById("counter");

let counterClick = 0;

clickButton.addEventListener("click", () => {
    // if(counterClick === 10) {
    //     alert("O limite de clicks foi atingido");
    //     counterClick = 0;
    // }else {
    //     counterClick++
    // }
    counterClick = counterClick === 10 ? (alert("O limite de cliques foi atingido"), 0) : counterClick + 1; 
    counter.innerHTML = `Contador: ${counterClick}`;
})







