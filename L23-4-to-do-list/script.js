/*
Level 2, Dificuldade 3, Exercício 4.

Exercício:
Objetivo: Criar uma lista de tarefas (to-do list) onde o usuário pode adicionar, remover e marcar as tarefas como concluídas.

Adicionar tarefa: O usuário deve ser capaz de adicionar tarefas com um campo de entrada e um botão de "Adicionar".
Remover tarefa: Cada tarefa deve ter um botão "Remover" que permitirá ao usuário excluir a tarefa.
Marcar como concluído: O usuário pode marcar a tarefa como concluída, e a tarefa ficará com um estilo diferenciado (por exemplo, riscar o texto ou mudar a cor do texto).
Requisitos:
Ao clicar no botão "Adicionar", uma nova tarefa será adicionada à lista.
O botão "Remover" deve remover a tarefa.
O botão de "Concluir" deve permitir ao usuário marcar a tarefa como concluída (você pode utilizar a manipulação de classes para mudar o estilo da tarefa)
*/

const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", () => {
    const textInput = taskInput.value.trim();
    if(textInput == "") {
        alert("o campo vazio não é válido!")
    }

    const li = document.createElement("li");
    li.innerHTML = textInput;
    taskList.appendChild(li);
    li.addEventListener("click", () => {
        li.classList.toggle("completed");
    })

    const button = document.createElement("button");
    button.innerHTML = "remove"
    li.appendChild(button);

    button.addEventListener("click", () => {
        li.remove();
    })

    taskInput.value = "";
})