"use strict";

JuegoLogica.limpiarEventosAudio = function () {
    if (!JuegoEstado.audioNivel) {
        return;
    }
    JuegoEstado.audioNivel.oncanplaythrough = null;
    JuegoEstado.audioNivel.onloadeddata = null;
    JuegoEstado.audioNivel.onerror = null;
};
