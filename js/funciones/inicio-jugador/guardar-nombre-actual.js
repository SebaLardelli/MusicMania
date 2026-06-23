"use strict";

InicioJugador.guardarNombreActual = function () {
    const resultado = InicioJugador.validarNombreActual();
    if (resultado.ok) {
        AlmacenamientoJugador.guardarNombre(resultado.nombre);
    }
    return resultado;
};
