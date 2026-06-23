"use strict";

JuegoLogica.reproducirAudioNivel = function (ruta) {
    let rutaCodificada;
    let audioListo = false;
    if (!JuegoEstado.audioNivel) {
        JuegoEstado.audioNivel = document.getElementById("audio-nivel");
    }
    if (!JuegoEstado.audioNivel) {
        if (typeof JuegoUi !== "undefined" && JuegoUi.mostrarErrorAudio) {
            JuegoUi.mostrarErrorAudio();
        }
        return;
    }
    JuegoLogica.detenerTimer();
    JuegoEstado.segundosNivelActual = 0;
    rutaCodificada = UtilidadesTexto.codificarRutaArchivo(ruta);
    JuegoLogica.limpiarEventosAudio();
    JuegoEstado.audioNivel.pause();
    JuegoEstado.audioNivel.currentTime = 0;
    JuegoEstado.audioNivel.onerror = function () {
        JuegoLogica.limpiarEventosAudio();
        if (typeof JuegoUi !== "undefined" && JuegoUi.mostrarErrorAudio) {
            JuegoUi.mostrarErrorAudio();
        }
    };
    JuegoEstado.audioNivel.onloadeddata = function () {
        if (audioListo || JuegoEstado.estadoPartida !== "escuchando") {
            return;
        }
        audioListo = true;
        JuegoLogica.intentarReproducirAudio();
    };
    JuegoEstado.audioNivel.oncanplaythrough = function () {
        if (audioListo || JuegoEstado.estadoPartida !== "escuchando") {
            return;
        }
        audioListo = true;
        JuegoLogica.intentarReproducirAudio();
    };
    JuegoEstado.audioNivel.src = rutaCodificada;
    JuegoEstado.audioNivel.load();
};
