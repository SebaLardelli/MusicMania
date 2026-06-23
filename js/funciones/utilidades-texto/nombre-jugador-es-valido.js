"use strict";

UtilidadesTexto.nombreJugadorEsValido = function (nombre) {
    const limpio = UtilidadesTexto.normalizarTexto(nombre).replace(/\s/g, "");
    const soloLetras = limpio.replace(/[^a-z]/g, "");
    return soloLetras.length >= 3;
};
