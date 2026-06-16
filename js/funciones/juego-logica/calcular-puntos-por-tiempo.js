"use strict";

JuegoLogica.calcularPuntosPorTiempo = function (segundos) {
    if (segundos < 10) {
        return 10;
    }
    if (segundos <= 20) {
        return 5;
    }
    return 1;
};
