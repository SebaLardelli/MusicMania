"use strict";

AlmacenamientoVolumen.guardarVolumen = function (valor) {
    const limpio = AlmacenamientoVolumen.normalizar(valor);
    const claveVolumen = "musicmania_volumen";
    try {
        localStorage.setItem(claveVolumen, String(limpio));
    } catch (errorStorage) {
        /* sin persistencia */
    }
    return limpio;
};
