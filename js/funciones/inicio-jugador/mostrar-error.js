"use strict";

InicioJugador.mostrarError = function (mensaje) {
    if (InicioJugadorEstado.textoError) {
        InicioJugadorEstado.textoError.textContent = mensaje;
    }
};
