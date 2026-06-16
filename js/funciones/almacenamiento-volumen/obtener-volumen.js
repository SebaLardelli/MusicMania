"use strict";

AlmacenamientoVolumen.obtenerVolumen = function () {
    var datos;
    var claveVolumen = "musicmania_volumen";
    if (!window.localStorage) {
        return AlmacenamientoVolumen.volumenPorDefecto;
    }
    datos = localStorage.getItem(claveVolumen);
    if (datos === null || datos === "") {
        return AlmacenamientoVolumen.volumenPorDefecto;
    }
    return AlmacenamientoVolumen.normalizar(datos);
};
