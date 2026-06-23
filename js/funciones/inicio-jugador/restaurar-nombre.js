"use strict";

InicioJugador.restaurarNombre = function () {
    let guardado;
    if (!InicioJugadorEstado.inputNombre) {
        return;
    }
    guardado = AlmacenamientoJugador.obtenerNombre();
    if (guardado) {
        InicioJugadorEstado.inputNombre.value = guardado;
    }
};
