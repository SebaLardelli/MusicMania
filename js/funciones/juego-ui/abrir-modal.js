"use strict";

JuegoUi.abrirModal = function (titulo, cuerpo, textoBoton, callback, nivelRevelado, rutaImagenFija) {
    JuegoUi.ocultarImagenModal();
    JuegoUiEstado.textoModalTitulo.textContent = titulo;
    JuegoUiEstado.textoModalCuerpo.textContent = cuerpo;
    JuegoUiEstado.botonModalAccion.textContent = textoBoton;
    JuegoUiEstado.callbackModal = callback;
    if (nivelRevelado) {
        JuegoUi.mostrarImagenModal(nivelRevelado);
    } else if (rutaImagenFija) {
        JuegoUi.mostrarImagenModalPorRuta(rutaImagenFija, titulo, true);
    }
    JuegoUiEstado.modalResultado.classList.add("visible");
};
