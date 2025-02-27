/*
Level 2, Dificuldade 3, Exercício 5, o foco será em aprimorar o que você já aprendeu, como manipulação de DOM, eventos e lógica de programação.

Enunciado do exercício:
Objetivo: Criar um contador interativo que aumente e diminua o valor mostrado na tela, ao clicar nos botões de aumentar e diminuir. O valor do contador começa em 0 e deve ser alterado com base nos cliques. Além disso, deve haver uma verificação para que o valor não seja negativo (ou seja, o valor não deve ir abaixo de 0).

Requisitos:

Um contador com o valor inicial de 0.
Dois botões: um para aumentar o valor e outro para diminuir.
Exibir o valor atualizado na tela após cada clique.
O valor não pode ser negativo.
*/

const counter = document.getElementById("counter");
const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");

let count = 0;

increaseBtn.addEventListener("click", () => {
        count++;
        counter.innerHTML = count;
})

decreaseBtn.addEventListener("click", () => {
    if(counter.innerHTML > 0) {
        count--;
        counter.innerHTML = count;
    }else {
        alert("números negativos não são permitidos");
    }
})