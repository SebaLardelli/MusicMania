"use strict";

JuegoUi.mostrarImagenModalPorRuta = function (ruta, textoAlt, esFinDelJuego) {
    let rutaCodificada = "";
    if (!ruta || !JuegoUiEstado.modalImagenContenedor || !JuegoUiEstado.modalImagenNivel) {
        return;
    }
    rutaCodificada = UtilidadesTexto.codificarRutaArchivo(ruta);
    JuegoUiEstado.modalImagenNivel.src = rutaCodificada + "?v=3";
    JuegoUiEstado.modalImagenNivel.alt = textoAlt || "";
    JuegoUiEstado.modalImagenContenedor.classList.remove("modal-imagen-contenedor--fin-del-juego");
    if (esFinDelJuego) {
        JuegoUiEstado.modalImagenContenedor.classList.add("modal-imagen-contenedor--fin-del-juego");
    }
    JuegoUiEstado.modalImagenContenedor.classList.remove("oculta");
};

JuegoUi.mostrarImagenModal = function (nivel) {
    if (!nivel || !nivel.rutaImagen) {
        return;
    }
    JuegoUi.mostrarImagenModalPorRuta(nivel.rutaImagen, "Calcomania de " + nivel.banda, false);
};
