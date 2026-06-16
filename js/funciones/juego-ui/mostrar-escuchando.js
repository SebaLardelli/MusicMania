"use strict";

JuegoUi.mostrarEscuchando = function (nivel) {
    JuegoUi.ocultarTodasPantallas();
    JuegoUiEstado.pantallaJuego.classList.remove("oculta");
    JuegoUi.mostrarPanelMisterio(nivel, "escuchando");
    JuegoUi.actualizarHud();
    JuegoUi.actualizarTimer(0);
    JuegoUiEstado.textoAyuda.textContent = "Suena la cancion. Cuando la reconozcas, detenela y responde.";
    if (JuegoUiEstado.inputRespuesta) {
        JuegoUiEstado.inputRespuesta.value = "";
    }
};
