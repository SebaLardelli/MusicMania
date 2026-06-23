"use strict";

AlmacenamientoJugador.guardarNombre = function (nombre) {
    let limpio = "";
    const claveNombre = "musicmania_nombre_jugador";
    if (nombre && typeof nombre === "string") {
        limpio = nombre.replace(/\s+/g, " ").trim();
    }
    if (!limpio) {
        return false;
    }
    try {
        localStorage.setItem(claveNombre, limpio);
        return true;
    } catch (errorStorage) {
        return false;
    }
};
