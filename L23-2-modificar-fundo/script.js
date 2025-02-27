/*
Level 2, Dificuldade 3, Exercício 3! 😊

Descrição do Exercício:
Objetivo: Criar uma lista de itens dinâmicos, onde o usuário pode adicionar novos itens a uma lista clicando em um botão. Além disso, ao adicionar um item, o mesmo deve ter um botão para ser removido. Vamos usar JavaScript para manipular o DOM e criar esse comportamento dinâmico.

Requisitos:
Um campo de entrada para o usuário adicionar um novo item à lista.
Um botão que, ao ser clicado, adiciona o item à lista.
Cada item da lista deve ter um botão "remover" que, ao ser clicado, remove o item da lista.
A lista deve ser exibida na tela e os itens devem ser adicionados e removidos dinamicamente.
*/

const itemInput = document.getElementById("itemInput");
const addItemBtn = document.getElementById("addItemBtn");
const itemList = document.getElementById("itemList");

addItemBtn.addEventListener("click", () => {
    const inputText = itemInput.value.trim();

    if(inputText == "") {
        alert("Campo vazio não é válido! Adicione um ítem.");
        return
    }

    const li = document.createElement("li");
    li.innerHTML = inputText;
    itemList.appendChild(li);

    const button = document.createElement("button");
    li.appendChild(button);
    button.classList.add("remove-btn");
    button.innerHTML = "Remove"

    button.addEventListener("click", () => {
        li.remove();
    })

    itemInput.value = "";
})

