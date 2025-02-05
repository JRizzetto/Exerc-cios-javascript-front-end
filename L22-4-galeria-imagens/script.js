/*
Objetivo:
Neste exercício, você vai criar uma página web simples que simula uma galeria de imagens. A galeria deve exibir várias imagens, e ao clicar em uma delas, a imagem deve ser ampliada e exibida em um modal (janela pop-up). O exercício vai envolver HTML, CSS e JavaScript para manipulação dos elementos.

Requisitos:
Criar um layout com várias imagens em miniatura.
Ao clicar em qualquer imagem, ela deve abrir em um modal, com uma versão maior da imagem.
O modal deve ter um botão para fechar a imagem ampliada.
O layout deve ser responsivo (se ajustar a diferentes tamanhos de tela).

Explicação:
HTML: Temos uma galeria de imagens (.gallery), e cada imagem dentro dela pode ser clicada para abrir em um modal. O modal é inicialmente invisível.
CSS: A galeria tem um layout responsivo usando flexbox, e as imagens aumentam de tamanho quando o cursor passa por cima. O modal cobre toda a tela com fundo escuro e centraliza a imagem ampliada.
JavaScript: O código manipula os cliques nas imagens da galeria, abre o modal com a imagem ampliada e permite fechá-lo clicando no botão de fechar ou fora da área da imagem.
*/

const galleryItem = document.querySelectorAll(".gallery-item");
const closeBtn = document.getElementById("close-btn");
const modalImg = document.getElementById("modal-img");
const modal = document.getElementById("modal");

galleryItem.forEach(img => {
    img.addEventListener("click", () => {
        modal.style.display = "block";
        modalImg.src = img.src;
    })
})

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
})
