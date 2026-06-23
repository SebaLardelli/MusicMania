"use strict";

JuegoUi.mostrarRespuesta = function (segundos) {
    const nivel = JuegoLogica.obtenerNivelActual();
    const limite = JuegoLogica.obtenerLimiteSegundosRespuesta();
    JuegoUi.ocultarTodasPantallas();
    JuegoUiEstado.pantallaRespuesta.classList.remove("oculta");
    if (nivel) {
        JuegoUi.mostrarPanelMisterio(nivel, "respondiendo");
    }
    JuegoUi.actualizarHud();
    JuegoUi.actualizarTimerRespuesta(limite);
    if (JuegoUiEstado.textoAyudaRespuesta) {
        JuegoUiEstado.textoAyudaRespuesta.textContent = "Tenés " + limite + " segundos. Elegi la cancion correcta de " + nivel.banda + ".";
    }
    if (nivel && JuegoUi.renderizarOpcionesRespuesta) {
        JuegoUi.renderizarOpcionesRespuesta(JuegoLogica.obtenerOpcionesRespuesta(nivel));
    }
};
