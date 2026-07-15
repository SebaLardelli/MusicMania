"use strict";

JuegoUi.iniciarConInteraccion = function () {
    JuegoUiEstado.requiereArranque = false;
    JuegoUi.ocultarPantallaArranque();
    if (
        JuegoEstado.estadoPartida === "escuchando" &&
        JuegoEstado.audioNivel &&
        JuegoEstado.audioNivel.getAttribute("src")
    ) {
        JuegoLogica.intentarReproducirAudio();
        return;
    }
    JuegoLogica.comenzarPartidaDesdeMenu();
};
