"use strict";

JuegoUi.actualizarColorTimerRespuesta = function (segundosRestantes) {
    JuegoUiEstado.textoTimer.classList.remove("timer-verde", "timer-amarillo", "timer-rojo");
    if (segundosRestantes <= 2) {
        JuegoUiEstado.textoTimer.classList.add("timer-rojo");
    } else if (segundosRestantes <= 4) {
        JuegoUiEstado.textoTimer.classList.add("timer-amarillo");
    } else {
        JuegoUiEstado.textoTimer.classList.add("timer-verde");
    }
};
