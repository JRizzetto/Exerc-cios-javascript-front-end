/*
Level 2 - Dificuldade 4 - Exercício 1
Título: "Contador Personalizado"
Descrição:
Crie uma página com um contador que permita ao usuário definir um valor inicial e um intervalo de incremento/decremento.

Requisitos:

O contador deve iniciar com um valor definido pelo usuário.
Deve haver dois botões: "Incrementar" e "Decrementar", que aumentam ou diminuem o contador pelo valor escolhido.
O usuário deve poder definir o passo do incremento/decremento (por exemplo, aumentar ou diminuir de 2 em 2).
Exibir dinamicamente o valor atualizado do contador na tela.
*/

const valorInicial = document.getElementById("valorInicial");
const passo = document.getElementById("passo");
const contador = document.getElementById("contador");
const incrementar = document.getElementById("incrementar");
const decrementar = document.getElementById("decrementar");


valorInicial.addEventListener("input", () => {
    contador.innerHTML = valorInicial.value;
})

incrementar.addEventListener("click", () => {
    const inicioNumber = parseFloat(valorInicial.value.trim());
    const passoNumber = parseFloat(passo.value.trim());

    if(!inicioNumber || !passoNumber) {
        alert("O input tem que ser diferente de zero e vazio")
        return;
    }

    contador.innerHTML = Number(contador.innerHTML) + passoNumber;
})


decrementar.addEventListener("click", () => {
    const passoNumber = parseFloat(passo.value.trim());

    if(Number(contador.innerHTML) - passoNumber < 0) {
        alert("não é possível ser menor que zero");
        return
    }
    contador.innerHTML = Number(contador.innerHTML) - passoNumber;
})



