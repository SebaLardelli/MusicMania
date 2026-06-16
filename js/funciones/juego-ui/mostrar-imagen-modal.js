"use strict";

JuegoUi.mostrarImagenModal = function (nivel) {
    var rutaCodificada = "";
    if (!nivel || !JuegoUiEstado.modalImagenContenedor || !JuegoUiEstado.modalImagenNivel) {
        return;
    }
    rutaCodificada = UtilidadesTexto.codificarRutaArchivo(nivel.rutaImagen);
    JuegoUiEstado.modalImagenNivel.src = rutaCodificada + "?v=3";
    JuegoUiEstado.modalImagenNivel.alt = "Calcomania de " + nivel.banda;
    JuegoUiEstado.modalImagenContenedor.classList.remove("oculta");
};
