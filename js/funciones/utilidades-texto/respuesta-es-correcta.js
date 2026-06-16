"use strict";

UtilidadesTexto.respuestaEsCorrecta = function (entrada, listaValidas) {
    var entradaNormalizada = UtilidadesTexto.normalizarTexto(entrada);
    var indice;
    var valida;
    if (entradaNormalizada.length < 2) {
        return false;
    }
    for (indice = 0; indice < listaValidas.length; indice = indice + 1) {
        valida = UtilidadesTexto.normalizarTexto(listaValidas[indice]);
        if (!valida) {
            continue;
        }
        if (entradaNormalizada === valida) {
            return true;
        }
        if (valida.length >= 3 && entradaNormalizada.indexOf(valida) !== -1) {
            return true;
        }
    }
    return false;
};
