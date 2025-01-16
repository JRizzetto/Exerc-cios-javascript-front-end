/*
Level 1, Dificuldade 3, Exercício 4
Descrição do Exercício:
Crie um sistema que permita ao usuário verificar se números digitados em uma lista (separados por vírgula) são números primos. 
Mostre os números primos em uma lista e os números não primos em outra.

Regras:
O usuário insere uma lista de números no input, separados por vírgula.
Quando clicar em "Verificar", os números serão divididos em duas categorias: primos e não primos.
Uma mensagem de erro será exibida se houver entradas inválidas (não numéricas).
*/

const numberInput = document.getElementById("numberInput");
const checkButton = document.getElementById("checkButton");
const errorMessage = document.getElementById("errorMessage");
const primeList = document.getElementById("primeList");
const notPrimeList = document.getElementById("notPrimeList");

checkButton.addEventListener("click", () => {
    let inputNumber = numberInput.value.trim().split(/,\s*/);
    let integerNumber = inputNumber.map(Number);
    let countError = ""

    primeList.innerHTML = "";
    notPrimeList.innerHTML = "";
    errorMessage.innerHTML = "";

    integerNumber.forEach((e, index) => {
        if(isNaN(e)) {
            countError += `${inputNumber[index]}, `
        }

        if(e < 2){
            const li = document.createElement("li");
            li.innerText = e;
            notPrimeList.appendChild(li);
            return;
        }

        if(e === 2) {
            const li = document.createElement("li");
            li.innerText = e;
            primeList.appendChild(li);
            return;
        }

        isPrime = true;
        for(let i = 2; i < e; i++) {
            if(e % i === 0) {
                isPrime = false;
                break
            }
        }

        const li = document.createElement("li");
        li.innerText = e;
        if(isPrime) {
            primeList.appendChild(li);
        } else {
            notPrimeList.appendChild(li);
        }
    })


    if(countError != "") {
        const li = document.createElement("li");
        li.innerText = `Não são números válidos: ${countError}`
        errorMessage.appendChild(li);
    }

    numberInput.value = "";
});


