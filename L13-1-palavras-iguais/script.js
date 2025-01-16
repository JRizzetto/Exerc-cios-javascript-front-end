/*
Level 1, Dificuldade 3, Exercício 1
📋 Desafio:
Dado um texto inserido pelo usuário, crie um programa que conte quantas vezes cada palavra aparece no texto. 
Exiba a lista de palavras e suas respectivas contagens na tela.

Regras:

Considere apenas palavras válidas (desconsidere pontuação ou espaços em branco).
A contagem deve ser case-insensitive (não deve diferenciar maiúsculas de minúsculas).
Exiba as palavras em ordem alfabética.
Exemplo:
Entrada:
"Olá mundo! Mundo, olá."

Saída:

olá: 2
mundo: 2

*/

const textInput = document.getElementById("textInput");
const countButton = document.getElementById("countButton");
const wordList = document.getElementById("wordList");

countButton.addEventListener("click", () => {
    
    const textClear = textInput.value
    .toLowerCase()
    .replace(/[^\p{L}\s]/gu, '')
    .trim()
    .split(/\s+/);

    const wordMap = new Map();

    textClear.forEach(word => {
        wordMap.set(word, (wordMap.get(word) || 0) + 1)
    })

    const repeatedWords = Array.from(wordMap.entries())
        .filter(([word, count]) => count > 1)
        .sort(([wordA, countA], [wordB, countB]) => wordA.localeCompare(wordB));

    wordList.innerHTML = "";

    repeatedWords.forEach(([e, count]) => {
        const li = document.createElement("li");
        li.innerText = `${e} - Repetido ${count} vezes`;
        wordList.appendChild(li);
    })

    textInput.value = "";
})

