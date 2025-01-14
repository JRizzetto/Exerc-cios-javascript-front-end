/*
Desafio Level 1, Dificuldade 2
Desafio:
Quando o usuário digitar no campo de texto, queremos contar quantas sentenças ele escreveu. 
Uma sentença é considerada um conjunto de palavras que termina com um ponto final, exclamação ou interrogação (ex.: "Olá! Como vai?").

Instruções:
Crie um campo de entrada (textarea ou input) onde o usuário possa digitar o texto.
Toda vez que o usuário digitar ou modificar o texto, conte o número de sentenças que ele digitou e mostre o resultado em um lugar visível na tela (pode ser um div ou span).
Para contar as sentenças, use um split de maneira eficiente para separar o texto por pontuação, como ponto final (.), ponto de exclamação (!) e interrogação (?).
Implemente uma verificação para não contar sentenças vazias (devido ao uso excessivo de pontuação como "!!!!" ou "???").
*/

const input = document.getElementById("textInput");
const sentenceCount = document.getElementById("sentenceCount");

input.addEventListener("input", () => {
    let textTrim = input.value.trim();
    let textSentence = textTrim.split(/[.?!]+/).filter(Boolean);
    
    sentenceCount.innerText = `Sentenças: ${textSentence.length}`
})


