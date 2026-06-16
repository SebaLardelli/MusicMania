"use strict";

JuegoSonidos.reproducirTick = function (segundosRestantes) {
    var ctx = JuegoSonidos.obtenerContexto();
    var frecuencia = 784;
    var volumenBase = 0.07;
    var volumenFinal;
    if (segundosRestantes === 5) {
        frecuencia = 880;
    }
    if (segundosRestantes === 4) {
        frecuencia = 932;
    }
    if (segundosRestantes === 3) {
        frecuencia = 988;
    }
    if (segundosRestantes === 2) {
        frecuencia = 1047;
    }
    if (segundosRestantes <= 1) {
        frecuencia = 1175;
    }
    volumenFinal = volumenBase * JuegoSonidos.obtenerVolumenEfectos();
    JuegoSonidos.reanudarContexto(ctx);
    JuegoSonidos.reproducirNota(ctx, frecuencia, 0.1, volumenFinal);
};
