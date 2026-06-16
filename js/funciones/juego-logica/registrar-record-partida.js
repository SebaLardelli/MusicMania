"use strict";

JuegoLogica.registrarRecordPartida = function (nivelMaximo) {
    return AlmacenamientoRecords.actualizarRecordSiMejora(
        JuegoEstado.idCategoria,
        JuegoEstado.nombreJugador,
        JuegoEstado.puntajeTotal,
        JuegoEstado.tiempoTotalSegundos,
        nivelMaximo
    );
};
