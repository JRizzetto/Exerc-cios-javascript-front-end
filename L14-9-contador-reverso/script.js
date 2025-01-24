/*
Level 1, Dificuldade 4, Exercício 10:
Descrição:
Crie um sistema interativo para modificar dinamicamente as cores de texto e fundo de uma caixa de demonstração na tela. 
O usuário poderá escolher as cores usando input type="color"

Funcionamento do JS (script.js):
Utilize eventos do tipo input para capturar a alteração de cor nos dois input type="color".
Modifique dinamicamente o estilo do elemento com as cores escolhidas.
*/

const bgColor = document.getElementById("bg-color");
const demoBox = document.getElementById("demo-box");


// textColor.addEventListener("input", () => {
//         demoBox.style.color = textColor.value;
// })

// bgColor.addEventListener("input", () => {
//         demoBox.style.background = bgColor.value;
// })



//outra forma de fazer
document.querySelectorAll("input[type='color']").forEach(input => {
        input.addEventListener("input", () => {
            const targetStyle = input.id === "text-color" ? "color" : "background";
            demoBox.style[targetStyle] = input.value;
        });
        
    });
    











