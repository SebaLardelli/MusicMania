"use strict";

JuegoUi.mostrarNivelSuperado = function (puntosNivel, puntajeTotal, nivel, callbackSiguiente) {
    var cuerpo;
    if (typeof configuracionJuego !== "undefined" && configuracionJuego.soloNombreObra) {
        cuerpo = "Correcto! Era " + nivel.banda + ". +" + puntosNivel + " puntos. Total: " + puntajeTotal + ".";
    } else {
        cuerpo = "Correcto! Era " + nivel.cancion + " de " + nivel.banda + ". +" + puntosNivel + " puntos. Total: " + puntajeTotal + ".";
    }
    JuegoUi.abrirModal("Nivel superado", cuerpo, "Siguiente nivel", callbackSiguiente, nivel);
};
