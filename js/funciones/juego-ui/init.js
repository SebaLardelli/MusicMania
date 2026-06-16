"use strict";

JuegoUi.init = function () {
    JuegoUi.obtenerElementos();
    JuegoUi.renderizarBarrasEcualizador();
    JuegoUi.ocultarPanelNivel();
    JuegoUiEstado.modalResultado.classList.remove("visible");
    JuegoUi.enlazarEventos();
    InstruccionesUi.init({
        botonId: "boton-instrucciones",
        modalId: "modal-instrucciones",
        cerrarId: "modal-instrucciones-cerrar",
        textoTiempoId: "texto-instrucciones-tiempo",
        obtenerLimiteSegundos: function () {
            return JuegoLogica.obtenerLimiteSegundosRespuesta();
        }
    });
    JuegoLogica.comenzarPartidaDesdeMenu();
};
