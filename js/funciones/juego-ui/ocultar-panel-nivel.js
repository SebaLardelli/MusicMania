"use strict";

JuegoUi.ocultarPanelNivel = function () {
    if (JuegoUiEstado.panelNivelVisual) {
        JuegoUiEstado.panelNivelVisual.classList.add("oculta");
    }
    if (JuegoUiEstado.marcoMisterio) {
        JuegoUiEstado.marcoMisterio.classList.remove("marco-misterio--activo");
    }
};
