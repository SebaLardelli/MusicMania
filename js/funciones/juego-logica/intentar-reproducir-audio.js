"use strict";

JuegoLogica.intentarReproducirAudio = function () {
    var promesa;
    if (JuegoEstado.estadoPartida !== "escuchando" || !JuegoEstado.audioNivel) {
        return;
    }
    promesa = JuegoEstado.audioNivel.play();
    if (promesa && typeof promesa.then === "function") {
        promesa.then(
            function () {
                JuegoLogica.iniciarTimer();
            },
            function () {
                if (typeof JuegoUi !== "undefined" && JuegoUi.mostrarErrorAudio) {
                    JuegoUi.mostrarErrorAudio();
                }
            }
        );
    } else {
        JuegoLogica.iniciarTimer();
    }
};
