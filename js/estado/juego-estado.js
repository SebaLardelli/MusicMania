"use strict";

const JuegoEstado = {
    configuracion: null,
    niveles: [],
    idCategoria: "",
    nombreCategoria: "",
    indiceNivelActual: 0,
    puntajeTotal: 0,
    tiempoTotalSegundos: 0,
    segundosNivelActual: 0,
    intervaloTimer: null,
    nombreJugador: "",
    estadoPartida: "inicio",
    audioNivel: null,
    timerIniciado: false,
    limiteSegundosRespuesta: 6,
    segundosRestantesRespuesta: 0,
    intervaloTimerRespuesta: null
};
