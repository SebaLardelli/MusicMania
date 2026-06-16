"use strict";

JuegoLogica.iniciarTimer = function () {
    if (JuegoEstado.timerIniciado) {
        return;
    }
    JuegoEstado.timerIniciado = true;
    JuegoEstado.segundosNivelActual = 0;
    if (typeof JuegoUi !== "undefined" && JuegoUi.actualizarTimer) {
        JuegoUi.actualizarTimer(JuegoEstado.segundosNivelActual);
    }
    JuegoEstado.intervaloTimer = setInterval(function () {
        JuegoEstado.segundosNivelActual = JuegoEstado.segundosNivelActual + 1;
        if (typeof JuegoUi !== "undefined" && JuegoUi.actualizarTimer) {
            JuegoUi.actualizarTimer(JuegoEstado.segundosNivelActual);
        }
    }, 1000);
};
