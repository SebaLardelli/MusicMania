"use strict";

AlmacenamientoVolumen.normalizar = function (valor) {
    var numero = parseFloat(valor);
    if (isNaN(numero)) {
        return AlmacenamientoVolumen.volumenPorDefecto;
    }
    if (numero < 0) {
        return 0;
    }
    if (numero > 1) {
        return 1;
    }
    return numero;
};
