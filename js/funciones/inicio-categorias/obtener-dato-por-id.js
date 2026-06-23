"use strict";

InicioCategorias.obtenerDatoPorId = function (idCategoria) {
    let indice;
    if (!datosCategorias) {
        return null;
    }
    for (indice = 0; indice < datosCategorias.length; indice = indice + 1) {
        if (datosCategorias[indice].id === idCategoria) {
            return datosCategorias[indice];
        }
    }
    return null;
};
