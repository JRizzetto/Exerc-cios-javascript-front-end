/*
Level 2 - Dificuldade 1 - Exercício 6!

📌 Objetivo do exercício: "Galeria de Imagens Interativa"
Criar uma galeria de imagens dinâmica, onde ao clicar em uma miniatura, ela aparece em tamanho grande.

Requisitos do Exercício
1️⃣ Exibir miniaturas de imagens (pode usar algumas imagens de exemplo).
2️⃣ Ao clicar em uma miniatura, a versão grande da imagem deve ser exibida no centro da tela.
3️⃣ Quando o usuário clicar fora da imagem grande, ela deve desaparecer.

 Agora sua missão: Criar o JavaScript!
📌 Regras para sua lógica em script.js:
✅ Quando clicar na miniatura, a imagem grande aparece no centro da tela.
✅ Se clicar fora da imagem grande, ela desaparece (.hidden é adicionada de volta).

Dica: Use event delegation, porque todas as miniaturas têm a classe .thumbnail! 😎

Depois que montar, me chama que te dou um feedback!
*/

const container = document.getElementById("container");
const imageBox = document.getElementById("imageBox");
const fullImage = document.getElementById("fullImage");

container.addEventListener("click", function(event) {
    if(event.target && event.target.classList.contains('thumbnail')) {
        imageBox.classList.remove("hidden");
        fullImage.src = event.target.src;
        fullImage.style.zoom = "3";
    }

    // Adicione esse evento para impedir o fechamento ao clicar dentro da imagem grande
    imageBox.addEventListener("click", function(event) {
        event.stopPropagation(); // Impede o fechamento ao clicar dentro da box da imagem
    });


});





