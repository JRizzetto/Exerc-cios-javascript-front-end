/*
Exercício 3: Classificando Números
Descrição: O usuário deve inserir uma lista de números separados por vírgula, e o programa deve exibir os números em ordem crescente e decrescente.

O próximo passo é você implementar o JavaScript! A lógica deve fazer o seguinte:

Receber os números do campo de entrada.
Validar a entrada: exibir uma mensagem de erro se houver valores inválidos.
Ordenar os números em ordem crescente e decrescente.
Exibir as listas ordenadas nos ul de "Ordem Crescente" e "Ordem Decrescente".
Quando estiver pronto, compartilhe a solução que você encontrou! 🚀
*/

const numberInput = document.getElementById("numberInput");
const sortButton = document.getElementById("sortButton");
const errorMessage = document.getElementById("errorMessage");
const ascendingList = document.getElementById("ascendingList");
const descendingList = document.getElementById("descendingList");


sortButton.addEventListener("click", () => {
    ascendingList.innerHTML = "";
    descendingList.innerHTML = "";
    let resultError = "";

    let increasingValue = numberInput.value.trim().split(/\,+/).sort((a,b) => a-b);
    let decreasingValue = numberInput.value.trim().split(/\,+/).sort((a,b) => b-a);

    increasingValue.forEach(e => {
        const parseValue = parseFloat(e);

        if(isNaN(parseValue)) {
            resultError += `${parseValue}, `;
        }else{
            const li = document.createElement("li");
            li.innerText = `${parseValue}`;
            ascendingList.appendChild(li);
        }
    })

    decreasingValue.forEach(e => {
        const li = document.createElement("li");
        li.innerText = `${e}`;
        descendingList.appendChild(li);
    })

    errorMessage.innerText = `Não são números válidos ${resultError}`;
    numberInput.value = "";
})