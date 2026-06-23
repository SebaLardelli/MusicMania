"use strict";

JuegoUi.actualizarHud = function () {
    const estado = JuegoLogica.obtenerEstado();
    JuegoUiEstado.textoPuntaje.textContent = "Puntos: " + estado.puntajeTotal;
    JuegoUiEstado.textoVidas.textContent = "Vidas: 1";
    JuegoUiEstado.textoNivel.textContent = "Nivel " + (estado.indiceNivel + 1) + " / " + estado.totalNiveles;
    if (JuegoUiEstado.textoJugador) {
        if (estado.nombreJugador) {
            JuegoUiEstado.textoJugador.textContent = "Jugador: " + estado.nombreJugador;
        } else {
            JuegoUiEstado.textoJugador.textContent = "Jugador: -";
        }
    }
};
