/*
Exercício 10 - Controle de Tema (Dark/Light Mode)
Objetivo: Criar um botão de alternância de tema (claro/escuro) que muda o estilo da página ao ser clicado.

Requisitos:
✅ O usuário pode alternar entre tema claro e escuro ao clicar em um botão.
✅ O modo escuro altera o fundo da página e a cor do texto.
✅ O estado do tema deve ser mantido ao recarregar a página (armazenamento em localStorage).
✅ Utilizar eventos e manipulação de classes dinâmicas.
*/

const themeToggle = document.getElementById("themeToggle");
const body = document.querySelector("body") ;

if(localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
}

themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    if(body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark")
    }else {
        localStorage.setItem("theme", "light")
    }
})

