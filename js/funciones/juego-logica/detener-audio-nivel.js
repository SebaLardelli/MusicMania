"use strict";

JuegoLogica.detenerAudioNivel = function () {
    JuegoLogica.limpiarEventosAudio();
    if (JuegoEstado.audioNivel) {
        JuegoEstado.audioNivel.pause();
        JuegoEstado.audioNivel.currentTime = 0;
    }
};
