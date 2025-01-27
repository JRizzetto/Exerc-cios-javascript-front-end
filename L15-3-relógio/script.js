/*
Level 1, Dificuldade 5, Exercício 3:

Descrição do Exercício:
Crie uma página que contém um relógio digital. 
Ele deve exibir horas, minutos, e segundos atualizados em tempo real, 
e o usuário terá uma opção de alternar entre o formato de 12 horas e 24 horas clicando em um botão.

Objetivo:
Aprender a manipular tempo com Date.
Atualizar o conteúdo dinamicamente com JavaScript.
Trabalhar com eventos (cliques no botão).

Desafios Extras:
Adicionar uma funcionalidade de segundo plano dinâmico, mudando a cor de fundo a cada segundo.
Permitir que o usuário pause ou retome o relógio.
Quando terminar, me mostre sua solução para avançarmos juntos. 🚀
*/

const digitalClock = document.getElementById("digital-clock");
const toggleFormat = document.getElementById("toggle-format");

let use12HourFormat = false; // Variável para controlar o formato de hora

function getClock() {
    const currentData = new Date();
    let currentHours = currentData.getHours();
    const currentMinutes = currentData.getMinutes();
    const currentSeconds = currentData.getSeconds();

    // Adiciona 0 à frente se necessário
    const currentSecond = currentSeconds < 10 ? `0${currentSeconds}` : `${currentSeconds}`;
    const currentMinute = currentMinutes < 10 ? `0${currentMinutes}` : `${currentMinutes}`;
    
    if (use12HourFormat) {
        const period = currentHours >= 12 ? "PM" : "AM";
        currentHours = currentHours % 12 || 12;  // Converte para formato 12h
        digitalClock.innerText = `${currentHours}:${currentMinute}:${currentSecond} ${period}`;
    } else {
        // Exibe no formato 24h
        currentHours = currentHours < 10 ? `0${currentHours}` : currentHours;
        digitalClock.innerText = `${currentHours}:${currentMinute}:${currentSecond}`;
    }
}

// Evento de clique para alternar o formato de hora
toggleFormat.addEventListener("click", () => {
    use12HourFormat = !use12HourFormat; // Alterna entre 12h e 24h
});

// Atualiza o relógio a cada segundo
let current = setInterval(getClock, 1000);

















