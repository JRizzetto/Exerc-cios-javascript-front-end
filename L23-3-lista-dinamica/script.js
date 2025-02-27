/*
Level 2, Dificuldade 3, Exercício 2.

Descrição do Exercício:
Objetivo: Criar uma interação que modifique a cor de fundo de um elemento com base em valores inseridos pelo usuário em um campo de entrada. Além disso, você deve adicionar um botão para que o usuário possa aplicar a mudança de cor.

Requisitos:
Um campo de entrada de texto onde o usuário pode digitar uma cor (pode ser o nome da cor ou o código hexadecimal).
Um botão que, quando clicado, muda a cor de fundo de um div ou section com base no valor inserido no campo de entrada.
Se o valor inserido não for uma cor válida, exiba uma mensagem informando que a cor não é válida.
*/

const colorInput = document.getElementById("colorInput");
const changeColorBtn = document.getElementById("changeColorBtn");
const colorBox = document.getElementById("colorBox");

changeColorBtn.addEventListener("click", () => {
    const inputCollor = colorInput.value.trim();

    colorBox.style.background = inputCollor;
    // if(inputCollor != colorBox.style.background) {
    //     alert("Entre com uma cor válida");
    //     return;
    // }

    function hexToRgb(hex) {
        hex = inputCollor.replace('#', '');
        console.log(hex)
    }
    hexToRgb()


    // console.log(inputCollor)
    // console.log(colorBox.style.background)

    colorInput.value = "";
})