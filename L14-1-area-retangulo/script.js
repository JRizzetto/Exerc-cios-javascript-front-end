/*
Level 1 - Dificuldade 4 - Exercício 1: 

Criar um formulário simples para calcular a área de um retângulo.

O seu desafio em JavaScript (script.js):

Obter os valores: Utilize o DOM para pegar os valores digitados nos campos de entrada "base" e "altura".
Validar os dados: Verifique se os valores são números válidos.
Calcular a área: Realize o cálculo da área do retângulo (área = base * altura).
Exibir o resultado: Atualize o conteúdo do parágrafo com o resultado da área calculada.
*/

const base = document.getElementById("base");
const altura = document.getElementById("altura"); 
const resultado = document.getElementById("resultado");

function calcularArea() {
    resultado.innerHTML = "";

    let result = 0;

    const baseInput = parseFloat(base.value)
    const alturaInput = parseFloat(altura.value)

    if(isNaN(baseInput) || isNaN(alturaInput)) {
        alert("Por favor, insira um valor numérico válido.")
        return 
    }
    
    result = baseInput * alturaInput
    return `${resultado.innerText = result.toFixed(2)}`;

    base.value = "";
    altura.value = ""; 
}











