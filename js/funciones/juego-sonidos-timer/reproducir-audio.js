"use strict";

JuegoSonidosTimer.reproducirAudio = function (elementoAudio) {
    let promesa;
    if (!elementoAudio) {
        return;
    }
    elementoAudio.volume = JuegoSonidosTimer.obtenerVolumen();
    elementoAudio.currentTime = 0;
    promesa = elementoAudio.play();
    if (promesa && typeof promesa.catch === "function") {
        promesa.catch(function () {});
    }
};
