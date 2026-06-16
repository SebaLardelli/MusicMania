"use strict";

UtilidadesTexto.nombreJugadorEsValido = function (nombre) {
    var limpio = UtilidadesTexto.normalizarTexto(nombre).replace(/\s/g, "");
    var soloLetras = limpio.replace(/[^a-z]/g, "");
    return soloLetras.length >= 3;
};
