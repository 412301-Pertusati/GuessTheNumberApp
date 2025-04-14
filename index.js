let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let intentos = 0;
let estadisticas = { partidas: 0, totalIntentos: 0 };

function verificarNumero() {
    const guess = Number(document.getElementById("inputNumero").value);
    const message = document.getElementById("mensaje");
    const stats = document.getElementById("estadisticas");
    intentos++;
    message.className = "transition-transform duration-200 ease-out text-lg font-semibold p-3 rounded shadow";
    if (guess <= 0 || guess > 100) {
        message.textContent = "Número fuera de rango"
        message.classList.add("bg-red-600", "text-white", "scale-105");
        animacionMensaje(message);
        return;
    }
    if (numeroSecreto === guess) {
        message.textContent = `¡Correcto! Adivinaste el número en ${intentos} intentos.`;
        message.classList.add("bg-green-500", "text-white", "scale-105");

        estadisticas.partidas++;
        estadisticas.totalIntentos += intentos;
        stats.textContent = `Número total de partidas: ${estadisticas.partidas}\nPromedio de intentos: ${(estadisticas.totalIntentos / estadisticas.partidas).toFixed(2)}`;

        numeroSecreto = Math.floor(Math.random() * 100) + 1;
        intentos = 0;
    } else if (numeroSecreto < guess) {
        message.textContent = "El número es menor.";
        message.classList.add("bg-slate-400", "text-white", "scale-105");
    } else {
        message.classList.add("bg-slate-700", "text-white", "scale-105");
        message.textContent = "El número es mayor.";
    }
    animacionMensaje(message);
}
function animacionMensaje(message) {
    message.classList.add("opacity-0");
    setTimeout(() => {
        message.classList.remove("opacity-0");
        message.classList.add("opacity-100");
    }, 50);

    setTimeout(() => {
        message.classList.remove("scale-105");
    }, 200);
}
if (typeof document !== 'undefined') {
    document.addEventListener("DOMContentLoaded", () => {
        const buttonVerificar = document.getElementById("verificarNumero");
        if(buttonVerificar) {
            buttonVerificar.addEventListener("click", verificarNumero);
        }
    });
}
