"use strict";

JuegoSonidosTimer.obtenerVolumen = function () {
    if (typeof AlmacenamientoVolumen !== "undefined") {
        return AlmacenamientoVolumen.obtenerVolumen();
    }
    return 0.7;
};
