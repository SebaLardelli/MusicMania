"use strict";

JuegoUi.mostrarImagenModal = function (nivel) {
    if (!nivel || !JuegoUiEstado.modalImagenContenedor || !JuegoUiEstado.modalImagenNivel) {
        return;
    }
    JuegoUiEstado.modalImagenNivel.src = UtilidadesTexto.codificarRutaArchivo(nivel.rutaImagen);
    JuegoUiEstado.modalImagenNivel.alt = "Calcomania de " + nivel.banda;
    JuegoUiEstado.modalImagenContenedor.classList.remove("oculta");
};
