"use strict";

JuegoUi.mostrarDerrotaPorTiempo = function (nivel, puntajeTotal, resultadoRecord) {
    var limite = JuegoLogica.obtenerLimiteSegundosRespuesta();
    var cuerpo = "Se agotaron los " + limite + " segundos en nivel " + nivel.nivel + ". Perdiste tu unica vida. Puntos: " + puntajeTotal + ".";
    cuerpo = cuerpo + JuegoUi.formatearMensajeNuevoRecord(resultadoRecord);
    JuegoUi.abrirModal("Fin del juego", cuerpo, "Reintentar", function () {
        JuegoLogica.reiniciarPartidaCompleta();
    }, null, "assets/juego/fin-del-juego.png");
};
