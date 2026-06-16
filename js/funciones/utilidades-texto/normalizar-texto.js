"use strict";

UtilidadesTexto.normalizarTexto = function (texto) {
    var resultado;
    if (!texto || typeof texto !== "string") {
        return "";
    }
    resultado = texto.toLowerCase();
    resultado = UtilidadesTexto.reemplazarAcentos(resultado);
    resultado = resultado.replace(/[^a-z0-9\s]/g, " ");
    resultado = resultado.replace(/\s+/g, " ").trim();
    return resultado;
};
