/*
Level 2 - Dificuldade 1 - Exercício 6 - "Modo Claro / Escuro (Dark Mode Toggle)"

Objetivo
Criar um botão que alterne entre modo claro e modo escuro.

Requisitos
✅ Criar um botão para alternar entre os modos.
✅ Quando o botão for clicado, a página muda para modo escuro (fundo escuro e texto claro).
✅ Ao clicar novamente, volta para o modo claro.
✅ O estado do tema deve ser salvo no localStorage, para que ao atualizar a página o usuário continue no modo escolhido.

📌 Regras para sua lógica em script.js:
✅ Quando clicar no botão, a classe "dark-mode" deve ser adicionada/removida do body.
✅ O estado do tema deve ser salvo no localStorage, para que a escolha seja mantida ao recarregar a página.

🔹 Dica: Você pode usar localStorage.setItem("theme", "dark") e localStorage.getItem("theme") para salvar e recuperar o estado.
*/

const toggleTheme = document.getElementById("toggleTheme");
const body = document.querySelector("body");

// if(localStorage.getItem("theme") === "dark") {
//      body.classList.add("dark-mode");
// }

// toggleTheme.addEventListener("click", () => {
//     body.classList.toggle("dark-mode");

//     if(body.classList.contains("dark-mode")) {
//         localStorage.setItem("theme", "dark");
//     } else {
//         localStorage.setItem("theme", "light");
//     }
// })






