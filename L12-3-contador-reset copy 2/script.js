/*
Level 1, Dificuldade 2:
Calculadora Simples
Objetivo:
Crie uma funcionalidade de calculadora simples que realize somas de dois números fornecidos pelo usuário.

Requisitos:
HTML e CSS estão prontos (veja abaixo). Concentre-se apenas na parte de JavaScript.
Quando o usuário clicar no botão "Somar", o resultado da soma deve ser exibido.
Certifique-se de que números inválidos (ex: letras ou campos vazios) não causem erros e mostrem uma mensagem como "Insira valores válidos".
*/

const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");
const btn = document.getElementById("sumButton");
const result = document.getElementById("result");

btn.addEventListener("click", () => {

    if(number1.value == "" && number2.value == "") {
        result.innerText = "Campo vazio não é válido";
        return
    }

    let firstNumber1 = Number(number1.value)
    let firstNumber2 = Number(number2.value)

    if(!isNaN(firstNumber1) && !isNaN(firstNumber2)){
        result.innerText =  `O resultado é: ${firstNumber1 + firstNumber2}`
    }else {
        result.innerText = "Entre com um número válido"
    }

    number1.value = "";
    number2.value = "";
})

    

