"use strict";

JuegoLogica.intentarReproducirAudio = function () {
    let promesa;
    if (JuegoEstado.estadoPartida !== "escuchando" || !JuegoEstado.audioNivel) {
        return;
    }
    if (JuegoUiEstado.requiereArranque) {
        JuegoUi.mostrarPantallaArranque();
        return;
    }
    promesa = JuegoEstado.audioNivel.play();
    if (promesa && typeof promesa.then === "function") {
        promesa.then(
            function () {
                JuegoLogica.iniciarTimer();
            },
            function () {
                if (typeof JuegoUi !== "undefined" && JuegoUi.mostrarPantallaArranque) {
                    JuegoUi.mostrarPantallaArranque();
                } else if (typeof JuegoUi !== "undefined" && JuegoUi.mostrarErrorAudio) {
                    JuegoUi.mostrarErrorAudio();
                }
            }
        );
    } else {
        JuegoLogica.iniciarTimer();
    }
};
