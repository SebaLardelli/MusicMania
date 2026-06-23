"use strict";

AlmacenamientoJugador.obtenerNombre = function () {
    let datos;
    const claveNombre = "musicmania_nombre_jugador";
    if (!window.localStorage) {
        return "";
    }
    datos = localStorage.getItem(claveNombre);
    if (!datos || typeof datos !== "string") {
        return "";
    }
    return datos.replace(/\s+/g, " ").trim();
};
