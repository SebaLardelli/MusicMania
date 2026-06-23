"use strict";

JuegoSonidosTimer.init = function () {
    JuegoSonidosTimerEstado.audioTick = document.getElementById(datosSonidosTimerRespuesta.idTick);
    JuegoSonidosTimerEstado.audioTickUrgente = document.getElementById(datosSonidosTimerRespuesta.idTickUrgente);
    JuegoSonidosTimerEstado.audioTiempoAgotado = document.getElementById(datosSonidosTimerRespuesta.idTiempoAgotado);
};
