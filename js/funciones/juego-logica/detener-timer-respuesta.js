"use strict";

JuegoLogica.detenerTimerRespuesta = function () {
    if (JuegoEstado.intervaloTimerRespuesta) {
        clearInterval(JuegoEstado.intervaloTimerRespuesta);
        JuegoEstado.intervaloTimerRespuesta = null;
    }
};
