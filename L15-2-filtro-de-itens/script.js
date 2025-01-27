/*
Level 1, Dificuldade 5, Exercício 2: 
"Filtro de itens com input de busca"

Neste exercício, você vai criar uma funcionalidade para filtrar itens em uma lista com base no que o usuário digitar no campo de busca.

Objetivo:
Criar um filtro em tempo real para exibir somente os itens da lista que correspondam ao texto digitado.

Requisitos do exercício:
Filtrar itens da lista em tempo real.
Ignorar maiúsculas e minúsculas durante a busca.
Exibir todos os itens se o campo de busca estiver vazio.
*/

const searchInput = document.getElementById("search-input");
const itemList = document.getElementById("item-list");
const listItems = document.getElementById("item-list");

searchInput.addEventListener("input", () => {
        const inputInsensitive = searchInput.value.toLocaleLowerCase();

        const filterArray = Array.from(listItems.children);

        filterArray.forEach(e => {
                const taskText = e.textContent.toLocaleLowerCase();

                if(taskText.includes(inputInsensitive)) {
                        e.style.display = "";
                }else {
                        e.style.display = "none";
                } 
        })
})














