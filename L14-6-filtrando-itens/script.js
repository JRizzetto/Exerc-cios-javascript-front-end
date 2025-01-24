/*
Level 1, Dificuldade 4, Exercício 6: Filtrando Itens em uma Lista de Tarefas
Neste exercício, você criará uma lista de tarefas onde o usuário pode digitar uma palavra ou frase em um campo de busca, e a lista será filtrada automaticamente conforme ele digita.

Objetivo:
Capturar o evento de digitação no campo de busca.
Comparar o texto digitado com cada item da lista.
Exibir apenas os itens que contêm o texto digitado (case-insensitive).
Esconder os itens que não correspondem.
*/

const input = document.getElementById("search-task");
const filter = document.getElementById("task-list");


input.addEventListener("input", () => {
        const inputInsensitive = input.value.toLowerCase();

        const filterArray = Array.from(filter.children);

        filterArray.forEach(item => {
        const taskText = item.innerHTML.toLowerCase();

        if(taskText.includes(inputInsensitive)) {
                item.style.display = "";
        }else {
                item.style.display = "none";
        }
        })
})


















