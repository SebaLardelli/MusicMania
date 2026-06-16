"use strict";

InicioJugador.guardarNombreActual = function () {
    var resultado = InicioJugador.validarNombreActual();
    if (resultado.ok) {
        AlmacenamientoJugador.guardarNombre(resultado.nombre);
    }
    return resultado;
};
