/*
Level 2 - Dificuldade 1 - Exercício 10:

Objetivo:
Criar uma calculadora simples de IMC (Índice de Massa Corporal). O usuário deve inserir o peso (em kg) e a altura (em metros), clicar em "Calcular" e ver o resultado com a classificação do IMC (abaixo do peso, normal, sobrepeso, obesidade).

Agora é com você! Faça o cálculo do IMC no JavaScript, exiba o valor e a classificação correspondente.
*/

const weight = document.getElementById("weight");
const height = document.getElementById("height");
const calculateBTN = document.getElementById("calculate");
const result = document.getElementById("result");

calculateBTN.addEventListener("click", () => {
    const pesoInput = Number(weight.value);
    const alturaInput = Number(height.value);

    if(pesoInput == "" || alturaInput == "") {
        alert("Input vazio não é valido!")
        return 
    }

    let resultIMC = pesoInput / (Math.pow(alturaInput, 2));
    
    if(resultIMC <= 18.5) {
        result.innerText = `O IMC é: ${resultIMC.toFixed(2)}\nAbaixo do peso`
    }else if(resultIMC <= 24.9) {
        result.innerText = `O IMC é: ${resultIMC.toFixed(2)}\nPeso normal`
    }else if(resultIMC <= 29.9) {
        result.innerText = `O IMC é: ${resultIMC.toFixed(2)}\nSobrepeso`
    }else if(resultIMC <= 34.9) {
        result.innerText = `O IMC é: ${resultIMC.toFixed(2)}\nObesidade grau 1`
    }else if(resultIMC <= 39.9) {
        result.innerText = `O IMC é: ${resultIMC.toFixed(2)}\nObesidade grau 2`
    }else {
        result.innerText = `O IMC é: ${resultIMC.toFixed(2)}\nObesidade grau 3 (grave)`
    }

    weight.value = "";
    height.value = "";
})

