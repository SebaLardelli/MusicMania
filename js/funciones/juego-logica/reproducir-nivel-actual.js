"use strict";

JuegoLogica.reproducirNivelActual = function () {
    var nivel = JuegoLogica.obtenerNivelActual();
    if (!nivel) {
        return;
    }
    JuegoEstado.estadoPartida = "escuchando";
    if (typeof JuegoUi !== "undefined" && JuegoUi.mostrarEscuchando) {
        JuegoUi.mostrarEscuchando(nivel);
    }
    JuegoLogica.reproducirAudioNivel(nivel.rutaAudio);
};
