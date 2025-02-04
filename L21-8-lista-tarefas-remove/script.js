/*
Level 2 - Dificuldade 1 - Exercício 8:

Objetivo:
Criar uma lista interativa de produtos onde o usuário pode:

Adicionar novos produtos.
Marcar produtos como "comprados" clicando neles (o texto deve riscar).
Remover produtos da lista.

Regras para o JavaScript (sua parte):
Adicionar produtos: ao clicar no botão, o item é adicionado à lista.
Marcar como comprado: ao clicar em um item da lista, ele fica riscado. Se clicar novamente, o risco é removido.
Remover produtos: cada item terá um botão "Remover" que o deleta da lista.
Quando terminar, me avise! Se quiser dicas ou feedback, estou por aqui. 🚀
*/

const productInput = document.getElementById("productInput");
const addProduct = document.getElementById("addProduct");
const productList = document.getElementById("productList");

productInput.addEventListener("keypress", (event) => {
    if(event.key === "Enter") {
        addProduct.click();
    }
})

addProduct.addEventListener("click", () => { 
    let inputValue = productInput.value.trim();

    if(inputValue === "") {
        alert("Por favor, digite o nome de um produto!");
        return
    }

    const li = document.createElement("li");
    li.innerText = inputValue;
    productList.appendChild(li);

    const button = document.createElement("button");
    li.appendChild(button);
    button.classList.add("remove-btn");
    button.innerText = "Remover";

    li.addEventListener("click", () => {
        li.classList.toggle("purchased");
    })
    
    button.addEventListener("click", (event) => {
        event.stopPropagation();
        li.remove();
    })

    productInput.value = "";
})







