"use strict";

UtilidadesTexto.mailEsValido = function (mail) {
    var limpio = mail.replace(/^\s+|\s+$/g, "");
    if (limpio.length === 0) {
        return false;
    }
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(limpio);
};
