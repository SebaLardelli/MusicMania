"use strict";

JuegoUi.ocultarImagenModal = function () {
    if (JuegoUiEstado.modalImagenContenedor) {
        JuegoUiEstado.modalImagenContenedor.classList.add("oculta");
    }
    if (JuegoUiEstado.modalImagenNivel) {
        JuegoUiEstado.modalImagenNivel.src = "";
        JuegoUiEstado.modalImagenNivel.alt = "";
    }
};
