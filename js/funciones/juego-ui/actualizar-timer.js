"use strict";

JuegoUi.actualizarTimer = function (segundos) {
    JuegoUiEstado.textoTimer.textContent = "Tiempo: " + segundos + " s";
    JuegoUi.actualizarColorTimer(segundos);
};
