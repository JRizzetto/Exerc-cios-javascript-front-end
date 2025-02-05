/*
Level 2 - Dificuldade 2 - Exercício 6
Desafio: "Formulário Interativo de Cadastro"
Neste exercício, vamos criar um formulário simples de cadastro. 
O formulário permitirá que o usuário preencha campos de nome, email e senha, e ao enviar, exibirá as informações inseridas na tela. 
Você também vai adicionar validação de formulário para garantir que os campos não sejam deixados em branco e que o formato do email seja válido.

Requisitos:
Crie um formulário com os seguintes campos: nome, email e senha.
Ao clicar no botão "Cadastrar", o formulário não deve ser enviado se os campos estiverem vazios ou se o email não for válido.
Após a validação, exiba os dados inseridos abaixo do formulário de forma dinâmica.
Use loops e eventos para manipular os dados e exibí-los.

Como funciona?
Validação: Ao clicar no botão de cadastro, o código impede o envio do formulário e verifica se todos os campos estão preenchidos. Se o email não tiver um formato válido, o código também exibirá um alerta para o usuário.
Exibição Dinâmica: Após a validação, os dados inseridos são exibidos dinamicamente abaixo do formulário. O nome, email e senha são exibidos em um bloco que aparece depois que o usuário clicar em "Cadastrar".
Limpeza dos Campos: Após o envio, os campos de entrada são limpos para permitir um novo cadastro.
*/

const registrationForm = document.getElementById("registration-form");
const nameIn = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const submit = document.getElementById("submit");
const userInfo = document.getElementById("user-info");


registrationForm.addEventListener("submit", (e) => {
    e.preventDefault();


    for(let i = 0; i < registrationForm.length - 1; i++) {
        if(registrationForm[i].value == "") {
            const errorMessage = document.createElement("p");
            errorMessage.innerText = `O input ${registrationForm[i].placeholder} não pode ser vazio`;
            errorMessage.style.color = "red";
            userInfo.appendChild(errorMessage);
            return
        }

        const textP = document.createElement("p");
        textP.innerText = `${registrationForm[i].placeholder} é: ${registrationForm[i].value}`  
        userInfo.appendChild(textP);
    }

    nameIn.value = "";
    email.value = "";
    password.value = "";
})





