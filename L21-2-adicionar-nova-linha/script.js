/*
Level 2, Dificuldade 1, Exercício 2:

Objetivo:
A ideia aqui é permitir que o usuário adicione uma nova linha com o nome, idade e local através de um campo de entrada e um botão. 
Vou incluir o HTML, CSS e JS.

Esse exercício vai ensinar a manipulação de DOM com loops, campos dinâmicos e o uso de eventos. 
Com isso, ao adicionar o nome, a idade e a localização, o código será capaz de adicionar uma nova linha à tabela. 
*/

const dataTable = document.getElementById("dataTable");
const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const locationInput = document.getElementById("location");
const addRow = document.getElementById("addRow");


addRow.addEventListener("click", () => {
    const tbody = document.querySelector("tbody");
    const tr = document.createElement("tr");
    tbody.appendChild(tr);

    function addCell(value) {
        const td = document.createElement("td");
        td.innerText = value;
        tr.appendChild(td);
    }

    addCell(nameInput.value);
    addCell(ageInput.value);
    addCell(locationInput.value);

    // Limpar campos de entrada
    nameInput.value = "";
    ageInput.value = "";
    locationInput.value = "";
})


