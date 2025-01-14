/*
Desafio Level 1, Dificuldade 2, Exercício 9:

Enunciado:
Crie uma função que receba uma frase e devolva as palavras com mais de 3 letras.

Exemplo de entrada:

Entrada: "Eu sou programador em formação"
Exemplo de saída:

Saída: ["programador", "formação"]
*/

const inputText = document.getElementById("inputText");
const filterButton = document.getElementById("filterButton");
const outputList = document.getElementById("outputList");

filterButton.addEventListener("click", () => {
    outputList.innerText = "";

    let textTrim = inputText.value.trim();
    let textArray = textTrim.split(/\s+/);

    let result = textArray.filter(e => e.length > 3);

    result.forEach(e => {
        const li = document.createElement("li");

        li.textContent = e;
        outputList.appendChild(li);
    })

    inputText.value = "";
})





