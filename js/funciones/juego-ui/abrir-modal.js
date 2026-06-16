"use strict";

JuegoUi.abrirModal = function (titulo, cuerpo, textoBoton, callback, nivelRevelado) {
    JuegoUi.ocultarImagenModal();
    JuegoUiEstado.textoModalTitulo.textContent = titulo;
    JuegoUiEstado.textoModalCuerpo.textContent = cuerpo;
    JuegoUiEstado.botonModalAccion.textContent = textoBoton;
    JuegoUiEstado.callbackModal = callback;
    if (nivelRevelado) {
        JuegoUi.mostrarImagenModal(nivelRevelado);
    }
    JuegoUiEstado.modalResultado.classList.add("visible");
};
