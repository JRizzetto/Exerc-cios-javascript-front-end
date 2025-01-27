/*
Level 1, Dificuldade 4, Exercício 10

Desafio: Controle Dinâmico de Cores
Descrição: 
Crie um sistema interativo para modificar dinamicamente as cores de texto e fundo de uma caixa de demonstração na tela. 
O usuário poderá escolher as cores usando input type="color".

Funcionamento do JS (script.js):
Utilize eventos do tipo input para capturar a alteração de cor nos dois input type="color".
Modifique dinamicamente o estilo do elemento com as cores escolhidas.
*/

const textColor = document.getElementById("text-color");
const bgColor = document.getElementById("bg-color");
const demoBox = document.getElementById("demo-box");

textColor.addEventListener("input", () => {
        console.log(textColor.value);

        demoBox.style.color = textColor.value;
});

bgColor.addEventListener("input", () => {
        console.log(bgColor.value);

        demoBox.style.background = bgColor.value;
})















