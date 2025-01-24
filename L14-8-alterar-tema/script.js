/*
Level 1, Dificuldade 4, Exercício 8:
Descrição do Exercício:
Objetivo: Criar um sistema para alternar o tema entre "Claro" e "Escuro" de forma dinâmica. 
O tema deve alterar a cor do texto, o fundo e mudar o texto do botão entre "Modo Escuro" e "Modo Claro".

Requisitos para o JS:
Detectar o clique no botão "Alternar Tema".
Adicionar e remover dinamicamente as classes light e dark no body.
Alterar o texto do botão de acordo com o tema atual (Ex.: "Modo Escuro" ou "Modo Claro").
O tema inicial deve ser "Claro".
*/

const body = document.querySelector("body");
const toggleTheme = document.getElementById("toggle-theme");

toggleTheme.addEventListener("click", () => {
        body.classList.toggle("dark");

        if(body.classList.contains("dark")) {
                toggleTheme.innerText = "Modo Claro" 
        }else {
                toggleTheme.innerText = "Modo Escuro" 
        }
        
})
















