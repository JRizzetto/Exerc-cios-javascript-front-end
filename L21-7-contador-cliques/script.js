/*
Level 2 - Dificuldade 1 - Exercício 7:
Objetivo: Criar um contador interativo de cliques.

Descrição do Exercício:
Você irá criar um contador simples onde, ao clicar em um botão, o contador aumenta em 1.
O número de cliques deve ser exibido na tela.
O contador deve ter um botão para resetar o valor (voltar para 0).
Você deve armazenar o número de cliques no localStorage, para que o contador não reinicie quando a página for atualizada.

Objetivos principais do exercício:
Interação com o DOM: Você deve conseguir manipular os elementos da página com o JavaScript.
Armazenamento no localStorage: O contador precisa persistir mesmo após a atualização da página.
Funcionalidade de reset: A página deve ter um botão que zera o contador, sem afetar o armazenamento do localStorage se não for pressionado.

Desafio Extra (se quiser se aprofundar):
Adicionar uma animação: Quando o contador mudar de valor, você pode adicionar uma animação visual para indicar que o valor foi atualizado (exemplo: aumentar o tamanho da fonte temporariamente ou mudar a cor).
Pronto para colocar as mãos no código? Avise quando terminar para darmos feedback! 🔥😃
*/

const clickCount = document.getElementById("clickCount");
const incrementBtn = document.getElementById("incrementBtn");
const resetBtn = document.getElementById("resetBtn");


function countLocal() {
    if(localStorage.getItem("count") != null) {
        clickCount.innerText = localStorage.count;
    }

    incrementBtn.addEventListener("click", () => {
        clickCount.innerText++;
        localStorage.setItem("count", `${clickCount.innerText}`);
        
        let primaryColor = parseInt(Math.random()*255);
        let SecondaryColor = parseInt(Math.random()*255);
        let tertiaryColor = parseInt(Math.random()*255);
    
        clickCount.style.color = `rgb(${primaryColor}, ${SecondaryColor}, ${tertiaryColor})`
    })

    resetBtn.addEventListener("click", () => {
        localStorage.removeItem("count");
        clickCount.innerText = 0;
        clickCount.style.color = "black";
    })
}
countLocal();





