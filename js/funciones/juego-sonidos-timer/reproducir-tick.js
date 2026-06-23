"use strict";

JuegoSonidosTimer.reproducirTick = function (segundosRestantes) {
    let audio = JuegoSonidosTimerEstado.audioTick;
    if (segundosRestantes <= 2) {
        audio = JuegoSonidosTimerEstado.audioTickUrgente;
    }
    JuegoSonidosTimer.reproducirAudio(audio);
};
