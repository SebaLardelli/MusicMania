"use strict";

JuegoLogica.obtenerEstado = function () {
    return {
        estadoPartida: JuegoEstado.estadoPartida,
        puntajeTotal: JuegoEstado.puntajeTotal,
        indiceNivel: JuegoEstado.indiceNivelActual,
        totalNiveles: JuegoEstado.niveles.length,
        nombreJugador: JuegoEstado.nombreJugador,
        segundosNivel: JuegoEstado.segundosNivelActual,
        segundosRestantesRespuesta: JuegoEstado.segundosRestantesRespuesta
    };
};
