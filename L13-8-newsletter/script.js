/*
Exercício 8 - Dificuldade 3 (Level 1)
Objetivo: Criar uma caixa de "newsletter" onde o usuário possa se inscrever através de um e-mail. 
Quando o usuário enviar o formulário, será exibida uma mensagem de agradecimento e o e-mail inserido 
será exibido abaixo da caixa (ao mesmo tempo que o formulário desaparece).

Seu Objetivo:
Complete o código JavaScript com funcionalidades adicionais, como:
Validar se o e-mail digitado é válido antes de enviar.
Adicionar animações para mostrar o formulário e a mensagem de forma mais interessante.
*/

const form = document.getElementById("newsletter-form");
const email = document.getElementById("email");
const messageContainer = document.getElementById("message-container");
const userEmail = document.getElementById("user-email");
const formContainer = document.getElementById("form-container");
const backButton = document.getElementById("back-button");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if(emailRegex.test(email.value)) {
        messageContainer.style.display = "flex";
        userEmail.innerText = `${email.value}`
        formContainer.style.display = "none"
    }
})

backButton.addEventListener("click", () => {
    messageContainer.style.display = "none";
    userEmail.innerText = "";
    formContainer.style.display = "block";
    email.value = "";
})

