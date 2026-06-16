"use strict";

JuegoSonidos.obtenerVolumenEfectos = function () {
    if (typeof AlmacenamientoVolumen !== "undefined") {
        return AlmacenamientoVolumen.obtenerVolumen();
    }
    return 0.7;
};
