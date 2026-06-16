"use strict";

JuegoUi.mostrarErrorAudio = function () {
    if (JuegoUiEstado.textoAyuda) {
        JuegoUiEstado.textoAyuda.textContent = "No se pudo cargar el audio. Abri el juego con XAMPP (http://localhost/...).";
    }
};
