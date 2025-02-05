/*
Level 2 - Dificuldade 2 - Exercício 5
Desafio: "Interagindo com uma lista de tarefas"
Neste exercício, vamos criar uma lista de tarefas simples. 
Você terá que usar JavaScript para adicionar e remover itens da lista, além de permitir que o usuário marque as tarefas como concluídas.

Requisitos:
Crie um campo de texto onde o usuário pode adicionar uma nova tarefa.
Crie um botão "Adicionar Tarefa" que adiciona a tarefa à lista.
Cada tarefa deve ter um botão "Remover" que, ao ser clicado, remove a tarefa da lista.
Ao clicar na tarefa, ela deve mudar de cor (indicando que foi concluída).
Use loops, eventos e manipulação do DOM.

Como funciona?
Adicionar Tarefa: Quando o usuário digita o nome de uma tarefa e clica no botão "Adicionar Tarefa", a tarefa é inserida na lista como um item de lista (<li>).
Remover Tarefa: Ao clicar no botão "Remover", a tarefa é removida da lista.
Marcar como Concluída: Ao clicar diretamente em uma tarefa, ela muda de cor e fica com o texto riscado (indicando que foi concluída).
*/

const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");

addTaskBtn.addEventListener("click", () => {
    const valueInput = taskInput.value.trim();

    if(valueInput == "") {
        alert("Input vazio não é válido");
        return;
    }

    const li = document.createElement("li");
    li.innerText = valueInput;
    taskList.appendChild(li);

    const btn = document.createElement("button");
    btn.innerText = "Remover";
    li.appendChild(btn);

    li.addEventListener("click", () => {
        li.classList.toggle("completed");
    })

    btn.addEventListener("click", (event) => {
        event.stopPropagation();
        li.remove();
    })

    taskInput.value = "";
})
