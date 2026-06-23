"use strict";

JuegoLogica.iniciarTimerRespuesta = function () {
    JuegoLogica.detenerTimerRespuesta();
    JuegoEstado.segundosRestantesRespuesta = JuegoEstado.limiteSegundosRespuesta;
    if (typeof JuegoUi !== "undefined" && JuegoUi.actualizarTimerRespuesta) {
        JuegoUi.actualizarTimerRespuesta(JuegoEstado.segundosRestantesRespuesta);
    }
    if (typeof JuegoSonidosTimer !== "undefined" && JuegoSonidosTimer.reproducirTick) {
        JuegoSonidosTimer.reproducirTick(JuegoEstado.segundosRestantesRespuesta);
    }
    JuegoEstado.intervaloTimerRespuesta = setInterval(function () {
        JuegoEstado.segundosRestantesRespuesta = JuegoEstado.segundosRestantesRespuesta - 1;
        if (typeof JuegoUi !== "undefined" && JuegoUi.actualizarTimerRespuesta) {
            JuegoUi.actualizarTimerRespuesta(JuegoEstado.segundosRestantesRespuesta);
        }
        if (JuegoEstado.segundosRestantesRespuesta > 0) {
            if (typeof JuegoSonidosTimer !== "undefined" && JuegoSonidosTimer.reproducirTick) {
                JuegoSonidosTimer.reproducirTick(JuegoEstado.segundosRestantesRespuesta);
            }
        }
        if (JuegoEstado.segundosRestantesRespuesta <= 0) {
            JuegoLogica.detenerTimerRespuesta();
            if (typeof JuegoSonidosTimer !== "undefined" && JuegoSonidosTimer.reproducirTiempoAgotado) {
                JuegoSonidosTimer.reproducirTiempoAgotado();
            }
            JuegoLogica.agotarTiempoRespuesta();
        }
    }, 1000);
};
