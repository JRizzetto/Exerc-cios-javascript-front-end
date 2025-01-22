/*
Level 1 - Dificuldade 3 - Exercício 10: Controle de Modal de Cadastro

Neste exercício, você criará um modal de cadastro que pode ser aberto e fechado com botões específicos. 
O foco será na manipulação do DOM, controle de classes e eventos.

Desafio:
Crie uma interface simples com um botão "Abrir Cadastro".
Ao clicar no botão, um modal aparecerá centralizado na tela com um formulário básico de cadastro (Nome, E-mail, Senha).
O modal deve ter um botão "Fechar" para escondê-lo.
Adicione uma leve transição ao abrir/fechar o modal.
*/

const openModal = document.getElementById("open-modal");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("close-modal");

openModal.addEventListener("click", () => {
    modal.classList.add("show");
})

closeModal.addEventListener("click", () => {
    modal.classList.remove("show");
})







