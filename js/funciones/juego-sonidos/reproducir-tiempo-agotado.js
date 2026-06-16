"use strict";

JuegoSonidos.reproducirTiempoAgotado = function () {
    var ctx = JuegoSonidos.obtenerContexto();
    var volumenFinal = 0.09 * JuegoSonidos.obtenerVolumenEfectos();
    JuegoSonidos.reanudarContexto(ctx);
    JuegoSonidos.reproducirNota(ctx, 220, 0.25, volumenFinal);
};
