"use strict";

InicioJugador.enlazarEventos = function () {
    var botonArranque = document.getElementById("boton-arranque");

    if (InicioJugadorEstado.inputNombre) {
        InicioJugadorEstado.inputNombre.addEventListener("blur", InicioJugador.guardarSiEsValido);
        InicioJugadorEstado.inputNombre.addEventListener("change", InicioJugador.guardarSiEsValido);
        InicioJugadorEstado.inputNombre.addEventListener("keydown", function (evento) {
            if (evento.key === "Enter") {
                evento.preventDefault();
                InicioJugador.guardarSiEsValido();
            }
        });
    }

    if (botonArranque) {
        botonArranque.addEventListener("click", InicioJugador.guardarSiEsValido);
    }
};
