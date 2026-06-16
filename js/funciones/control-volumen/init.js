"use strict";

ControlVolumen.init = function (config) {
    var configLocal = config || {};
    ControlVolumenEstado.audioObjetivo = document.getElementById(configLocal.idAudio);
    ControlVolumenEstado.sliderVolumen = document.getElementById(configLocal.idSlider);
    ControlVolumenEstado.textoVolumen = document.getElementById(configLocal.idTextoVolumen);
    ControlVolumenEstado.botonMute = document.getElementById(configLocal.idBotonMute);
    ControlVolumenEstado.volumenActual = AlmacenamientoVolumen.obtenerVolumen();
    if (!ControlVolumenEstado.audioObjetivo) {
        return;
    }
    ControlVolumenEstado.audioObjetivo.muted = false;
    ControlVolumenEstado.audioObjetivo.volume = ControlVolumenEstado.volumenActual;
    ControlVolumen.sincronizarSlider();
    ControlVolumen.actualizarBotonMute();
    if (ControlVolumenEstado.sliderVolumen) {
        ControlVolumenEstado.sliderVolumen.addEventListener("input", function () {
            var valorSlider = parseInt(ControlVolumenEstado.sliderVolumen.value, 10);
            if (isNaN(valorSlider)) {
                valorSlider = 0;
            }
            ControlVolumenEstado.volumenActual = valorSlider / 100;
            if (ControlVolumenEstado.volumenActual > 0 && ControlVolumenEstado.audioObjetivo.muted) {
                ControlVolumenEstado.audioObjetivo.muted = false;
            }
            ControlVolumen.guardarYNotificar(configLocal);
        });
    }
    if (ControlVolumenEstado.botonMute) {
        ControlVolumenEstado.botonMute.addEventListener("click", function () {
            ControlVolumen.alternarMute(configLocal);
        });
    }
};
