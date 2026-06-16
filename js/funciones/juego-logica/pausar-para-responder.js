"use strict";

JuegoLogica.pausarParaResponder = function () {
    if (JuegoEstado.estadoPartida !== "escuchando") {
        return;
    }
    JuegoLogica.detenerTimer();
    JuegoLogica.detenerAudioNivel();
    JuegoEstado.estadoPartida = "respondiendo";
    if (typeof JuegoUi !== "undefined" && JuegoUi.mostrarRespuesta) {
        JuegoUi.mostrarRespuesta(JuegoEstado.segundosNivelActual);
    }
    JuegoLogica.iniciarTimerRespuesta();
};
