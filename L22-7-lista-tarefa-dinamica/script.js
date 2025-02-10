/*
Level 2, Dificuldade 2, Exercício 7.

🎯 Desafio: Criar uma lista dinâmica de tarefas
O usuário poderá adicionar tarefas em uma lista.
Cada tarefa terá um botão para ser removida.
As tarefas adicionadas devem alternar entre duas cores de fundo (exemplo: clara e escura).
📌 Habilidades praticadas:
✔ Manipulação do DOM
✔ Eventos (click)
✔ Uso de forEach para iterar sobre os itens
✔ Manipulação de classes dinâmicas
*/


const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

taskInput.addEventListener("keypress", (event) => {
    if(event.key === "Enter") addTaskBtn.click();
})

addTaskBtn.addEventListener("click", () => {
    let inputvalue = taskInput.value.trim();

    if(!inputvalue) return;

    const li = document.createElement("li");
    taskList.appendChild(li);
    li.innerText = inputvalue;

    const btn = document.createElement("button");
    li.appendChild(btn);
    btn.classList.add("remove-btn");
    btn.innerText = "Remover";

    btn.addEventListener("click", (event) => {
        li.remove();
    })

    console.log(inputvalue);
    taskInput.value = "";
})




