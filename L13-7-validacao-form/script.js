/*
Level 1, Dificuldade 3, Exercício 7: 
Exercício 7 - "Formulário de validação de dados pessoais"
Objetivo:
Criar um formulário onde o usuário deve preencher os campos de nome e e-mail. 
O sistema deve validar se o nome contém pelo menos 3 caracteres e o e-mail é válido. 
Se algum desses requisitos não for atendido, uma mensagem de erro deve ser exibida.

Objetivos de Validação:
Nome: Deverá ter no mínimo 3 caracteres.
E-mail: Deve ser um endereço de e-mail válido.
Mensagens de erro:
Caso o nome tenha menos de 3 caracteres, deve exibir: "O nome precisa ter pelo menos 3 caracteres."
Caso o e-mail seja inválido, deve exibir: "Por favor, insira um e-mail válido."
Ao passar na validação, uma mensagem "Cadastro bem-sucedido!" deverá aparecer na tela.
*/

const nameInput = document.getElementById("name");
const nameError = document.getElementById("nameError");
const email = document.getElementById("email");
const emailError = document.getElementById("emailError");
const formFeedback = document.getElementById("formFeedback");
const form = document.getElementById("userForm");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    nameError.innerHTML = "";
    emailError.innerHTML = "";
    formFeedback.innerHTML = "";

    if(nameInput.value.length < 3) {
        const pText = document.createElement("p");
        pText.innerText = "O nome precisa ter pelo menos 3 caracteres."
        nameError.appendChild(pText);
        nameError.style.display = "block";
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(email.value)) {
        const ptext = document.createElement("p");
        ptext.innerText = "Por favor, insira um e-mail válido.";
        emailError.appendChild(ptext);
        emailError.style.display = "block";
    } 

    if(nameError.innerHTML == "" && emailError.innerHTML == "") {
        const pText = document.createElement("p");
        pText.innerText = "Cadastro bem-sucedido!"
        formFeedback.appendChild(pText);
        formFeedback.classList.toggle("success");
        formFeedback.classList.remove("error");
    }else {
        const pText = document.createElement("p");
        pText.innerText = "Algo deu errado"
        formFeedback.appendChild(pText);
        formFeedback.classList.toggle("error");
        formFeedback.classList.remove("success");
    }

    nameInput.value = "";
    email.value = "";
})


