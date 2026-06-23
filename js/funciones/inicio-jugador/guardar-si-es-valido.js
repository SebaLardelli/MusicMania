"use strict";

InicioJugador.guardarSiEsValido = function () {
    const resultado = InicioJugador.validarNombreActual();
    if (resultado.ok) {
        AlmacenamientoJugador.guardarNombre(resultado.nombre);
        InicioJugador.limpiarError();
    }
};
