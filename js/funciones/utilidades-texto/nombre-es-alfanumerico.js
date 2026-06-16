"use strict";

UtilidadesTexto.nombreEsAlfanumerico = function (nombre) {
    var limpio = nombre.replace(/^\s+|\s+$/g, "");
    if (limpio.length === 0) {
        return false;
    }
    return /^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ]+(\s+[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ]+)*$/.test(limpio);
};
