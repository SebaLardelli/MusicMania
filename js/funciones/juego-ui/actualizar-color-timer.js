"use strict";

JuegoUi.actualizarColorTimer = function (segundos) {
    JuegoUiEstado.textoTimer.classList.remove("timer-verde", "timer-amarillo", "timer-rojo");
    if (segundos < 10) {
        JuegoUiEstado.textoTimer.classList.add("timer-verde");
    } else if (segundos <= 20) {
        JuegoUiEstado.textoTimer.classList.add("timer-amarillo");
    } else {
        JuegoUiEstado.textoTimer.classList.add("timer-rojo");
    }
};
