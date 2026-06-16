"use strict";

JuegoUi.mostrarDerrota = function (nivel, puntajeTotal, resultadoRecord) {
    var cuerpo = "Respuesta incorrecta en nivel " + nivel.nivel + ". Perdiste tu unica vida. Puntos: " + puntajeTotal + ".";
    cuerpo = cuerpo + JuegoUi.formatearMensajeNuevoRecord(resultadoRecord);
    JuegoUi.abrirModal("Fin del juego", cuerpo, "Reintentar", function () {
        JuegoLogica.reiniciarPartidaCompleta();
    }, null, "assets/juego/fin-del-juego.png");
};
