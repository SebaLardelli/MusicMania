"use strict";

JuegoLogica.agotarTiempoRespuesta = function () {
    let nivel;
    let resultadoRecord;

    if (JuegoEstado.estadoPartida !== "respondiendo") {
        return;
    }

    JuegoEstado.estadoPartida = "derrota";
    nivel = JuegoLogica.obtenerNivelActual();

    if (!nivel) {
        return;
    }

    resultadoRecord = JuegoLogica.registrarRecordPartida(nivel.nivel);

    if (typeof JuegoUi !== "undefined" && JuegoUi.mostrarDerrotaPorTiempo) {
        JuegoUi.mostrarDerrotaPorTiempo(nivel, JuegoEstado.puntajeTotal, resultadoRecord);
    }
};
