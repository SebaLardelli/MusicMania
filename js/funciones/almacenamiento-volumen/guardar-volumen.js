"use strict";

AlmacenamientoVolumen.guardarVolumen = function (valor) {
    var limpio = AlmacenamientoVolumen.normalizar(valor);
    var claveVolumen = "musicmania_volumen";
    try {
        localStorage.setItem(claveVolumen, String(limpio));
    } catch (errorStorage) {
        /* sin persistencia */
    }
    return limpio;
};
