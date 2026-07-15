"use strict";

JuegoUi.ocultarPantallaArranque = function () {
    if (JuegoUiEstado.pantallaArranque) {
        JuegoUiEstado.pantallaArranque.classList.add("oculta");
    }
};
