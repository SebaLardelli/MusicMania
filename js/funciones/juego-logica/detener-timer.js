"use strict";

JuegoLogica.detenerTimer = function () {
    if (JuegoEstado.intervaloTimer) {
        clearInterval(JuegoEstado.intervaloTimer);
        JuegoEstado.intervaloTimer = null;
    }
    JuegoEstado.timerIniciado = false;
    JuegoLogica.detenerTimerRespuesta();
};
