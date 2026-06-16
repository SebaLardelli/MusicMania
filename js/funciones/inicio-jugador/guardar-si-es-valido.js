"use strict";

InicioJugador.guardarSiEsValido = function () {
    var resultado = InicioJugador.validarNombreActual();
    if (resultado.ok) {
        AlmacenamientoJugador.guardarNombre(resultado.nombre);
        InicioJugador.limpiarError();
    }
};
