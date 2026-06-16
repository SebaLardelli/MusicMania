"use strict";

document.addEventListener("DOMContentLoaded", function () {
    if (typeof configuracionJuego === "undefined") {
        return;
    }
    if (configuracionJuego.clasePagina) {
        document.body.classList.add(configuracionJuego.clasePagina);
    }
    JuegoLogica.init(configuracionJuego);
    ControlVolumen.init({
        idAudio: "audio-nivel",
        idSlider: "control-volumen",
        idTextoVolumen: "texto-volumen",
        idBotonMute: "boton-mute"
    });
    JuegoUi.init();
});
