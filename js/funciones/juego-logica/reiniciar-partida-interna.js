"use strict";

JuegoLogica.reiniciarPartidaInterna = function (mantenerNombre) {
    const nombreGuardado = JuegoEstado.nombreJugador;
    JuegoLogica.detenerTimer();
    JuegoLogica.detenerAudioNivel();
    JuegoEstado.indiceNivelActual = 0;
    JuegoEstado.puntajeTotal = 0;
    JuegoEstado.tiempoTotalSegundos = 0;
    JuegoEstado.segundosNivelActual = 0;
    JuegoEstado.estadoPartida = "inicio";
    if (mantenerNombre) {
        JuegoEstado.nombreJugador = nombreGuardado;
    } else {
        JuegoEstado.nombreJugador = "";
    }
};
