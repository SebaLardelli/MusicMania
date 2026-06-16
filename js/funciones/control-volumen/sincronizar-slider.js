"use strict";

ControlVolumen.sincronizarSlider = function () {
    var porcentaje;
    if (!ControlVolumenEstado.sliderVolumen) {
        return;
    }
    porcentaje = Math.round(ControlVolumenEstado.volumenActual * 100);
    ControlVolumenEstado.sliderVolumen.value = String(porcentaje);
    ControlVolumen.actualizarTextoVolumen();
};
