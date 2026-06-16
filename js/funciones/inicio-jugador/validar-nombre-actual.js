"use strict";

InicioJugador.validarNombreActual = function () {
    var nombre = "";
    if (InicioJugadorEstado.inputNombre) {
        nombre = InicioJugadorEstado.inputNombre.value;
    }
    if (!UtilidadesTexto.nombreJugadorEsValido(nombre)) {
        return {
            ok: false,
            mensaje: "El nombre debe tener al menos 3 letras."
        };
    }
    return {
        ok: true,
        nombre: nombre.replace(/\s+/g, " ").trim()
    };
};
