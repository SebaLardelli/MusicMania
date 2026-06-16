"use strict";

JuegoSonidos.obtenerContexto = function () {
    var AudioContextClass;
    if (JuegoSonidosEstado.contextoAudio) {
        return JuegoSonidosEstado.contextoAudio;
    }
    AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) {
        return null;
    }
    JuegoSonidosEstado.contextoAudio = new AudioContextClass();
    return JuegoSonidosEstado.contextoAudio;
};
