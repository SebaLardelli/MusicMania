"use strict";

JuegoUi.mostrarVictoria = function (puntajeTotal, tiempoTotal, nombreGenero, ultimoNivel, resultadoRecord) {
    var cuerpo = "Completaste " + nombreGenero + " con " + puntajeTotal + " puntos en " + tiempoTotal + " segundos.";
    cuerpo = cuerpo + JuegoUi.formatearMensajeNuevoRecord(resultadoRecord);
    JuegoUi.abrirModal("Victoria", cuerpo, "Jugar de nuevo", function () {
        JuegoLogica.reiniciarPartidaCompleta();
    }, ultimoNivel);
};
