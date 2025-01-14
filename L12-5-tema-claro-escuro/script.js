/*
Desafio Level 1, Dificuldade 2
Crie uma aplicação simples onde o usuário pode clicar em um botão para alternar entre temas "Claro" e "Escuro" para a página inteira.

Requisitos:
Ao clicar no botão:
O fundo da página deve alternar entre branco (tema Claro) e preto (tema Escuro).
A cor do texto também deve mudar para garantir boa visibilidade (ex.: preto no tema Claro, branco no tema Escuro).
O texto do botão deve ser atualizado para mostrar o tema atual (ex.: "Ativar Tema Escuro" ou "Ativar Tema Claro").
O comportamento deve funcionar para múltiplos cliques.
*/

const btnChange = document.getElementById("themeButton");
const body = document.querySelector("body");


btnChange.addEventListener("click", () => {
    body.classList.toggle("dark");
})

