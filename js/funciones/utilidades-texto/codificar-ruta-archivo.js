"use strict";

UtilidadesTexto.codificarRutaArchivo = function (ruta) {
    var partes = ruta.split("/");
    var indice;
    var resultado = "";
    for (indice = 0; indice < partes.length; indice = indice + 1) {
        if (indice > 0) {
            resultado = resultado + "/";
        }
        resultado = resultado + encodeURIComponent(partes[indice]);
    }
    return resultado;
};
