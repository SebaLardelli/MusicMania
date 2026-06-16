"use strict";

JuegoLogica.obtenerNivelActual = function () {
    if (JuegoEstado.indiceNivelActual >= 0 && JuegoEstado.indiceNivelActual < JuegoEstado.niveles.length) {
        return JuegoEstado.niveles[JuegoEstado.indiceNivelActual];
    }
    return null;
};
