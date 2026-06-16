"use strict";

JuegoUi.mostrarRespuesta = function (segundos) {
    var nivel = JuegoLogica.obtenerNivelActual();
    var limite = JuegoLogica.obtenerLimiteSegundosRespuesta();
    JuegoUi.ocultarTodasPantallas();
    JuegoUiEstado.pantallaRespuesta.classList.remove("oculta");
    if (nivel) {
        JuegoUi.mostrarPanelMisterio(nivel, "respondiendo");
    }
    JuegoUi.actualizarHud();
    JuegoUi.actualizarTimerRespuesta(limite);
    if (JuegoUiEstado.textoAyudaRespuesta) {
        JuegoUiEstado.textoAyudaRespuesta.textContent = "Tenés " + limite + " segundos. Escribe el nombre de la cancion o de la banda.";
    }
    JuegoUiEstado.inputRespuesta.value = "";
    JuegoUiEstado.inputRespuesta.focus();
};
