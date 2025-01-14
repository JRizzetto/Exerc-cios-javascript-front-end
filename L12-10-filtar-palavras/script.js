/*
Desafio Level 1, Dificuldade 2, Exercício 10
Descrição:
Crie um script que permita ao usuário inserir uma frase e filtrar apenas as palavras que terminam com uma letra específica (que o usuário escolhe). 
Exiba essas palavras em uma lista.

Requisitos:
O usuário insere uma frase em um campo de texto.
O usuário escolhe a letra final que deseja filtrar em um segundo campo de texto.
Ao clicar em um botão, exiba as palavras que terminam com essa letra em uma lista.
Limpe o campo de entrada e o campo da letra após o filtro.
Garanta que o filtro seja case insensitive (não diferencie maiúsculas e minúsculas).
Mostre uma mensagem na lista caso nenhuma palavra seja encontrada.
*/

const inputText = document.getElementById("inputText");
const letterInput = document.getElementById("letterInput");
const filterButton = document.getElementById("filterButton");
const outputList = document.getElementById("outputList");


filterButton.addEventListener("click", () => {
    outputList.innerText = "";

    let textTrim = inputText.value.toLowerCase().trim().split(/\s+/);
   
    let letterLower = letterInput.value.toLowerCase();
    let filterResult = textTrim.filter(e => e.slice(-1) === letterLower);

    if(filterResult.length === 0) {
        const li = document.createElement("li");
        li.innerText = "Nenhuma palavra foi encontrada";
        outputList.appendChild(li);
    }

    filterResult.forEach(e => {
        const li = document.createElement("li");
        li.innerText = e;
        outputList.appendChild(li);
    })

    inputText.value = "";
    letterInput.value = "";
})


