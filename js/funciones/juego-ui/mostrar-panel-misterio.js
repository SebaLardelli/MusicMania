"use strict";

JuegoUi.mostrarPanelMisterio = function (nivel, modo) {
    if (!nivel || !JuegoUiEstado.panelNivelVisual || !JuegoUiEstado.textoBandaNivel) {
        return;
    }
    JuegoUiEstado.panelNivelVisual.classList.remove("oculta");
    if (modo === "respondiendo") {
        JuegoUiEstado.textoBandaNivel.textContent = "Nivel " + nivel.nivel + " - Adivina";
    } else {
        JuegoUiEstado.textoBandaNivel.textContent = "Nivel " + nivel.nivel + " - Escuchando...";
    }
    if (JuegoUiEstado.marcoMisterio) {
        JuegoUiEstado.marcoMisterio.classList.add("marco-misterio--activo");
    }
};
