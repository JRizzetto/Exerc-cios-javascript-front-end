/*
Level 1, Dificuldade 4, Exercício 7:
Objetivo do Exercício:
Criar um gerenciador simples de contador com três botões para diferentes incrementos. Você terá:

Botões que incrementam o contador em valores específicos: +1, +5 e +10.
Um botão para zerar o contador.
O contador precisa ser atualizado dinamicamente na tela.
Requisitos:
Crie um HTML básico com um display para o número e os botões necessários.
Estilize com CSS para que os elementos fiquem centralizados.
A lógica para atualizar o valor do contador será criada com JavaScript.
*/

const countText = document.getElementById("counter-display");
const incrementOne = document.getElementById("increment-one");
const incrementFive = document.getElementById("increment-five");
const incrementTen = document.getElementById("increment-ten");
const resetCounter = document.getElementById("reset-counter");




function addCount() {
        let count = 0;

        function updateCount(value = 0) {
                count += value;
                countText.innerText = count
        }

        incrementOne.addEventListener("click", () => updateCount(1))
        incrementFive.addEventListener("click", () => updateCount(5))
        incrementTen.addEventListener("click", () => updateCount(10))
        resetCounter.addEventListener("click", () => updateCount(-count))

        // incrementOne.addEventListener("click", () => {
        //          count = count + 1;
        //          countText.innerText = `${count}`
        // })

        // incrementFive.addEventListener("click", () => {
        //         count = count + 5;
        //         countText.innerText = `${count}`
        // })

        // incrementTen.addEventListener("click", () => {
        //         count = count + 10;
        //         countText.innerText = `${count}`
        // })

        // resetCounter.addEventListener("click", () => {
        //         count = 0;
        //         countText.innerText = count;  
        // })

        updateCount()
}
addCount()















