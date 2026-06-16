"use strict";

ControlVolumen.guardarYNotificar = function (config) {
    ControlVolumenEstado.volumenActual = AlmacenamientoVolumen.guardarVolumen(ControlVolumenEstado.volumenActual);
    ControlVolumen.aplicarVolumenAudio();
    ControlVolumen.actualizarTextoVolumen();
    ControlVolumen.actualizarBotonMute();
    if (config && typeof config.alCambiar === "function") {
        config.alCambiar(ControlVolumenEstado.volumenActual);
    }
};
