/*
Level 2 - Dificuldade 1 - Exercício 9. O foco deste exercício será manipulação de abas (tabs).

🎯 Objetivo:
Crie uma interface de abas (tabs) onde, ao clicar em uma aba, o conteúdo correspondente seja exibido e o conteúdo das outras abas seja ocultado.

🚀 O que você deve fazer com JavaScript:
Ao clicar em uma aba, o conteúdo correspondente deve aparecer e o das outras abas deve desaparecer.
A aba clicada deve ganhar a classe active, destacando-a.
O conteúdo da Aba 1 já está visível por padrão.
*/

// const tabButton = document.querySelectorAll(".tab-button");
// const tab1 = document.getElementById("tab1");
// const tab2 = document.getElementById("tab2");
// const tab3 = document.getElementById("tab3");

// tabButton.forEach(e => {
//     e.addEventListener("click", (event) => {
//         if(event.target.innerHTML === "Aba 1") {
//             tabButton[1].classList.remove("active");
//             tab2.classList.remove("active");
//             tabButton[2].classList.remove("active");
//             tab3.classList.remove("active");

//             e.classList.add("active");
//             tab1.classList.add("active");
//         }else if(event.target.innerHTML === "Aba 2") {
//             tabButton[0].classList.remove("active");
//             tab1.classList.remove("active");
//             tabButton[2].classList.remove("active");
//             tab3.classList.remove("active");

//             e.classList.add("active");
//             tab2.classList.add("active");
//         }else if(event.target.innerHTML === "Aba 3") {
//             tabButton[0].classList.remove("active");
//             tab1.classList.remove("active");
//             tabButton[1].classList.remove("active");
//             tab2.classList.remove("active");

//             e.classList.add("active");
//             tab3.classList.add("active");
//         }
//     })
// })


const tabButtons = document.querySelectorAll(".tab-button");
const tabs = document.querySelectorAll(".tab-content");

tabButtons.forEach(button => {
    button.addEventListener("click", () => {
        
        tabButtons.forEach(btn => btn.classList.remove("active"));
        tabs.forEach(tab => tab.classList.remove("active"));

        button.classList.add("active");
        document.getElementById(button.dataset.target).classList.add("active");
    })
})


