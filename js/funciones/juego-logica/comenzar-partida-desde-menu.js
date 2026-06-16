"use strict";

JuegoLogica.comenzarPartidaDesdeMenu = function () {
    var nombreGuardado = AlmacenamientoJugador.obtenerNombre();
    if (!UtilidadesTexto.nombreJugadorEsValido(nombreGuardado)) {
        window.location.href = "index.html";
        return false;
    }
    JuegoEstado.nombreJugador = nombreGuardado.replace(/\s+/g, " ").trim();
    JuegoLogica.reiniciarPartidaInterna(true);
    if (typeof JuegoUi !== "undefined" && JuegoUi.ocultarErrorAudio) {
        JuegoUi.ocultarErrorAudio();
    }
    JuegoLogica.reproducirNivelActual();
    return true;
};
