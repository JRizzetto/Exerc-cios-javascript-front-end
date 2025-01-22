/*
Level 1 - Dificuldade 3 - Exercício 9
Neste exercício, você irá criar um pequeno projeto de FAQ (Frequently Asked Questions), onde o usuário pode clicar em perguntas para exibir ou ocultar suas respostas. O foco está em manipular o DOM para adicionar ou remover classes, controlar estilos e reforçar os conceitos de eventos.

Desafio:
Crie uma interface com pelo menos 3 perguntas.
Cada pergunta terá um título (ex.: "O que é front-end?") e uma área para a resposta escondida por padrão.
Quando o usuário clicar na pergunta, a resposta correspondente será exibida ou escondida (toggle).
Apenas uma resposta pode estar visível por vez.
*/

const faqQuestion = document.querySelectorAll(".faq-question");
const faqAnswer = document.querySelectorAll(".faq-answer");


faqQuestion.forEach((question, count) => {
    question.addEventListener('click', () => {
                

        faqAnswer.forEach((answer, i) => {
            if(i !== count) {
                answer.classList.add("hidden");
            }
        })

        faqAnswer[count].classList.toggle("hidden");
    })
})




