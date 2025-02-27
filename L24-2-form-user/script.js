/*
Level 2, Dificuldade 4, Exercício 2.

Descrição do exercício:
O objetivo deste exercício é criar uma página onde o usuário possa preencher um formulário para inserir dados de nome e email, e quando ele clicar em "Enviar", esses dados sejam exibidos em uma lista abaixo do formulário. Além disso, os dados inseridos não podem ser repetidos e, ao adicionar, eles devem ser mostrados em ordem alfabética.

Especificações:
Formulário de cadastro:

Campos: Nome e E-mail.
Um botão "Enviar" para enviar os dados.
Ao enviar, os dados precisam ser listados em uma área abaixo do formulário.
Validações:

Os campos não podem ser vazios.
O e-mail precisa ser válido (você pode usar uma expressão regular simples para isso).
Não pode haver nomes repetidos na lista.
Exibição:

Os dados inseridos devem ser exibidos em uma lista ordenada de forma alfabética (por nome).
*/


const formulario = document.getElementById("formulario");
const listaUsuarios = document.getElementById("listaUsuarios");

let arraySort = [];

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const lista = document.querySelectorAll("li");
    for(let i = 0; i < lista.length; i++) {
        if(lista[i].innerHTML.includes(formulario.nome.value) || (lista[i].innerHTML.includes(formulario.email.value))) {
            console.log("esse nome ou e-mail ja existe;");
            formulario.nome.value = "";
            formulario.email.value = "";
            return;
        }
    }

    listaUsuarios.textContent = "";

    arraySort.push(`${formulario.nome.value} - ${formulario.email.value}`);

    arraySort.sort().forEach(e => {
        const li = document.createElement("li");
        listaUsuarios.appendChild(li);
        li.textContent  = e;
    })

    formulario.nome.value = "";
    formulario.email.value = "";
});



