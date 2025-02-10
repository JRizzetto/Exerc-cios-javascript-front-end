/*
Level 2, Dificuldade 2, Exercício 8.

Criando uma Galeria de Imagens Dinâmica

Enunciado:
Crie uma aplicação onde o usuário possa adicionar imagens a uma galeria dinâmica. A cada nova imagem adicionada, ela deve aparecer automaticamente na tela.

Requisitos:
O usuário deve inserir uma URL válida no campo de entrada.
Ao clicar no botão "Adicionar", a imagem deve ser exibida na galeria.
As imagens devem ser organizadas automaticamente na tela.
Se a URL for inválida ou o campo estiver vazio, nada deve ser adicionado.
As imagens devem ter um efeito de zoom ao passar o mouse sobre elas.
O layout deve ser responsivo.
💡 Dica: Você pode manipular o DOM para criar elementos <img> dinamicamente e adicioná-los dentro da div.gallery.

Agora, implemente a lógica em JavaScript e me avise se precisar de ajuda! 🚀
*/

// https://picsum.photos/200/300

const imageUrl = document.getElementById("imageUrl");
const addImageBtn = document.getElementById("addImageBtn");
const gallery = document.getElementById("gallery");
const img = document.querySelector("img");

addImageBtn.addEventListener("click", () => {
    let inputValue = imageUrl.value.trim();

    if(!inputValue) {
        console.log("Input vazio não é válido");
        return;
    }

    const img = document.createElement("img");
    img.src = inputValue;


    img.onload = () => {
        gallery.appendChild(img);
        imageUrl.value = "";
    }
    
    img.onerror = () => {
        console.log("Imagem inválida! Verifique a URL.");
        alert("Erro ao carregar a imagem. Verifique a URL")
    }
   
})

