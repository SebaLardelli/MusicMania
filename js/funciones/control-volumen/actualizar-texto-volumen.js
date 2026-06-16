"use strict";

ControlVolumen.actualizarTextoVolumen = function () {
    var porcentaje = Math.round(ControlVolumenEstado.volumenActual * 100);
    if (ControlVolumenEstado.textoVolumen) {
        ControlVolumenEstado.textoVolumen.textContent = porcentaje + "%";
    }
    if (ControlVolumenEstado.sliderVolumen) {
        ControlVolumenEstado.sliderVolumen.setAttribute("aria-valuenow", String(porcentaje));
    }
};
