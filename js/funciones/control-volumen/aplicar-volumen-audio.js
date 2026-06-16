"use strict";

ControlVolumen.aplicarVolumenAudio = function () {
    if (!ControlVolumenEstado.audioObjetivo) {
        return;
    }
    if (ControlVolumenEstado.audioObjetivo.muted) {
        return;
    }
    ControlVolumenEstado.audioObjetivo.volume = ControlVolumenEstado.volumenActual;
};
