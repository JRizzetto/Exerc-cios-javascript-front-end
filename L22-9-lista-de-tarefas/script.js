/*
Exercício 9 - Lista de Tarefas Interativa
Objetivo: Criar uma lista de tarefas onde o usuário pode adicionar, remover e marcar tarefas como concluídas.

Requisitos:
🔹 O usuário pode adicionar uma nova tarefa digitando no input e clicando em um botão.
🔹 Cada tarefa pode ser removida clicando em um botão de exclusão ao lado.
🔹 Clicar em uma tarefa alterna entre concluída e não concluída, alterando a aparência dela (classe dinâmica).
🔹 Usar loops (forEach) para manipular múltiplos elementos da lista.
🔹 Utilizar eventos como click e change.
*/

const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function addTask() {
    let inputText = taskInput.value.trim();

    if(inputText === "") {
        console.log("Entre com um valor válido");
        return
    }

    const li = document.createElement("li");
    li.innerText = inputText;
    taskList.appendChild(li);
    li.addEventListener("click", () => {
        li.classList.toggle("completed");
    })

    const button = document.createElement("button");
    button.innerText = "Remover"
    li.appendChild(button);
    button.addEventListener("click", () => {
        li.remove();
    })

    taskInput.value = "";
}


