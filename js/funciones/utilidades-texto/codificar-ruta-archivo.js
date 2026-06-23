"use strict";

UtilidadesTexto.codificarRutaArchivo = function (ruta) {
    const partes = ruta.split("/");
    let indice;
    let resultado = "";
    for (indice = 0; indice < partes.length; indice = indice + 1) {
        if (indice > 0) {
            resultado = resultado + "/";
        }
        resultado = resultado + encodeURIComponent(partes[indice]);
    }
    return resultado;
};
