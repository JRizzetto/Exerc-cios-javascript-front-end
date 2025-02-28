/*Level 2, Dificuldade 4, Exercício 4
🎯 Objetivo:
Criar uma galeria de imagens dinâmica onde o usuário pode adicionar e remover imagens por meio de um formulário.

📌 Requisitos:
A página deve conter um campo de URL para que o usuário possa adicionar imagens.
Deve haver um botão "Adicionar Imagem" que adiciona a imagem à galeria.
Cada imagem exibida deve ter um botão "Remover" que, quando clicado, remove a imagem da galeria.
A galeria deve ser exibida em um layout responsivo.
O JavaScript deve manipular o DOM para adicionar e remover as imagens dinamicamente.
*/

const imageUrl = document.getElementById("image-url");
const addImage = document.getElementById("add-image");
const gallery = document.getElementById("gallery");

addImage.addEventListener("click", () => {
    const divContainer = document.createElement("div");
    gallery.appendChild(divContainer);
    divContainer.classList.add("gallery-item");

    const img = document.createElement("img");
    divContainer.appendChild(img);
    img.src = imageUrl.value;

    const divRmv = document.createElement("div");
    divContainer.appendChild(divRmv);
    divRmv.classList.add("remove-btn");
    divRmv.innerHTML = "Rmv"
    
    divRmv.addEventListener("click", () => {
        divContainer.remove();
    })

    imageUrl.value = "";
})


