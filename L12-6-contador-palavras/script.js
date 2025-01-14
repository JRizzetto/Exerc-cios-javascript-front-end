/*
Desafio Level 1, Dificuldade 2
Desafio: Contador de Palavras
Requisitos:
Você deve adicionar uma funcionalidade de contador de palavras na área de texto.
Sempre que o usuário digitar, deve atualizar a quantidade de palavras no texto.
Lembre-se de que uma palavra é qualquer sequência de caracteres separada por espaços.
Dica:
Use o evento input e o método split() para separar as palavras digitadas.

Você pode começar implementando o código JavaScript que vai contar as palavras assim que o usuário digitar no textarea. Boa sorte! 😄
*/

const input = document.getElementById("textInput");
const contador = document.getElementById("wordCount");

input.addEventListener("input", () => {
    let text = input.value.trim();
    let textWords = text.split(/\s+/).filter(Boolean);

    console.log(textWords)
    contador.innerHTML = `Palavras: ${textWords.length}`
})



