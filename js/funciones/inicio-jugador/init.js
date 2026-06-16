"use strict";

InicioJugador.init = function () {
    InicioJugadorEstado.inputNombre = document.getElementById("input-nombre-jugador");
    InicioJugadorEstado.textoError = document.getElementById("error-nombre-jugador");
    InicioJugador.restaurarNombre();
    InicioJugador.enlazarEventos();
};
