"use strict";

ControlVolumen.alternarMute = function (config) {
    if (!ControlVolumenEstado.audioObjetivo) {
        return;
    }
    if (ControlVolumenEstado.audioObjetivo.muted) {
        ControlVolumenEstado.audioObjetivo.muted = false;
        if (ControlVolumenEstado.volumenActual === 0) {
            ControlVolumenEstado.volumenActual = AlmacenamientoVolumen.volumenPorDefecto;
            ControlVolumen.sincronizarSlider();
        }
        ControlVolumen.aplicarVolumenAudio();
    } else {
        ControlVolumenEstado.audioObjetivo.muted = true;
    }
    ControlVolumen.actualizarBotonMute();
    if (config && typeof config.alCambiar === "function") {
        config.alCambiar(ControlVolumenEstado.volumenActual);
    }
};
