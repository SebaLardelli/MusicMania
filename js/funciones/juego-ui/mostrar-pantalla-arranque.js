"use strict";

JuegoUi.mostrarPantallaArranque = function () {
    JuegoUiEstado.requiereArranque = true;
    if (JuegoUiEstado.pantallaArranque) {
        JuegoUiEstado.pantallaArranque.classList.remove("oculta");
    }
};
