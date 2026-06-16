"use strict";

JuegoUi.ocultarImagenModal = function () {
    if (JuegoUiEstado.modalImagenContenedor) {
        JuegoUiEstado.modalImagenContenedor.classList.add("oculta");
        JuegoUiEstado.modalImagenContenedor.classList.remove("modal-imagen-contenedor--fin-del-juego");
    }
    if (JuegoUiEstado.modalImagenNivel) {
        JuegoUiEstado.modalImagenNivel.src = "";
        JuegoUiEstado.modalImagenNivel.alt = "";
    }
};
