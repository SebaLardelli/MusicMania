"use strict";

document.addEventListener("DOMContentLoaded", function () {
    InicioMedia.init();
    InicioJugador.init();
    InicioCategorias.init();
    InicioRecords.init();
    ControlVolumen.init({
        idAudio: "audio-fondo",
        idSlider: "control-volumen",
        idTextoVolumen: "texto-volumen",
        idBotonMute: "boton-mute"
    });
    InstruccionesUi.init({
        botonId: "boton-instrucciones",
        modalId: "modal-instrucciones",
        cerrarId: "modal-instrucciones-cerrar"
    });
});

window.addEventListener("pageshow", function () {
    if (typeof InicioJugador !== "undefined" && InicioJugador.restaurarNombre) {
        InicioJugador.restaurarNombre();
    }
    if (typeof InicioRecords !== "undefined" && InicioRecords.renderizarTabla) {
        InicioRecords.renderizarTabla();
    }
});
