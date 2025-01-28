/*
Exercício 4 de Level 1, Dificuldade 6, focado em front-end.

Desafio:
Crie uma página onde o usuário possa ajustar dinamicamente o tamanho do texto de um parágrafo usando um range slider. 
Além disso, inclua dois botões: um para negrito e outro para resetar as configurações aplicadas.

Requisitos:
HTML:

Um range input para ajustar o tamanho da fonte.
Dois botões: um para ativar/desativar o negrito e outro para resetar todas as configurações.
Um parágrafo onde o texto será alterado.
CSS:

Estilo básico para os controles e centralização da página.
Um design visualmente agradável.
JavaScript (a ser criado por você):

Atualizar dinamicamente o tamanho da fonte do parágrafo de acordo com o valor do slider.
Adicionar a funcionalidade de alternar o negrito do texto.
Resetar o tamanho da fonte e o estilo de negrito ao clicar no botão de "Resetar".
*/

const fontSizeSlider = document.getElementById("fontSizeSlider");
const bold = document.getElementById("bold");
const reset = document.getElementById("reset");
const text = document.getElementById("text");

fontSizeSlider.addEventListener("input", () => {
    text.style.fontSize = `${fontSizeSlider.value}px`
});

bold.addEventListener("click", () => {
    text.classList.add("bold"); 
});

reset.addEventListener("click", () => {
    text.style.fontSize = "16px";
    text.classList.remove("bold");
    fontSizeSlider.value = 16;
})












