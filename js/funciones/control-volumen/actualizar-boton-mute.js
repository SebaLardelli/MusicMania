"use strict";

ControlVolumen.actualizarBotonMute = function () {
    if (!ControlVolumenEstado.botonMute || !ControlVolumenEstado.audioObjetivo) {
        return;
    }
    if (ControlVolumenEstado.audioObjetivo.muted || ControlVolumenEstado.volumenActual === 0) {
        ControlVolumenEstado.botonMute.textContent = "Activar musica";
    } else {
        ControlVolumenEstado.botonMute.textContent = "Silenciar musica";
    }
};
