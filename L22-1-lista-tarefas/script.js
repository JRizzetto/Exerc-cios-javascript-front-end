/*
Level 2 - Dificuldade 2 - Exercício 1:

Objetivo:
Criar uma lista de tarefas (to-do list) com as seguintes funcionalidades:

Adicionar tarefas;
Marcar/desmarcar como concluída (clicando na tarefa);
Remover tarefas com um botão específico.

Adicione tarefas ao clicar no botão "Adicionar".
Marque/desmarque uma tarefa como concluída clicando nela.
Crie um botão para remover a tarefa ao lado de cada item.
*/

const taskInput = document.getElementById("taskInput");
const addTask = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

addTask.addEventListener("click", () => {
    let valueInput = taskInput.value.trim();

    if(valueInput === "") {
        alert("Entre com uma tarefa válida!");
        return
    }

    const li = document.createElement("li");
    li.innerText = valueInput;
    taskList.appendChild(li);

    const button = document.createElement("button");
    button.innerText = "Remover";
    li.appendChild(button);
    button.classList.add("remove-btn");

    button.addEventListener("click", (event) => {
        event.stopPropagation();
        li.remove();
    })

    li.addEventListener("click", () => {
        li.classList.toggle("completed");
    })

    taskInput.value = "";
})




