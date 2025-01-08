/*
Crie um script JavaScript para alterar o texto de um botão quando ele for clicado. 
O botão começa com o texto "Clique em mim!" e, ao ser clicado, muda para "Obrigado por clicar!".
*/

const btn = document.getElementById("btn");

// btn.addEventListener("click", () => {
//     btn.innerHTML = "Obrigado por clicar!";
// });


/////////////////////////////////////////////////////////


// function handleClick() {
//     return btn.innerHTML = "Obrigado por clicar!";
// }

// btn.addEventListener("click", handleClick);


/////////////////////////////////////////////////////////


// btn.onclick = function() {
//     btn.innerHTML = "Obrigado por clicar!"
// }


/////////////////////////////////////////////////////////


btn.addEventListener("click", function() {
    this.innerText = "Obrigado por clicar!"
})
