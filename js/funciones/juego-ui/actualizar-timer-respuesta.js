"use strict";

JuegoUi.actualizarTimerRespuesta = function (segundosRestantes) {
    JuegoUiEstado.textoTimer.textContent = "Tiempo para adivinar: " + segundosRestantes + " s";
    JuegoUi.actualizarColorTimerRespuesta(segundosRestantes);
};
