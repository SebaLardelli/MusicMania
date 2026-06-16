"use strict";

InicioMedia.obtenerElementos = function () {
    InicioMediaEstado.videoFondo = document.getElementById("video-fondo");
    InicioMediaEstado.audioFondo = document.getElementById("audio-fondo");
    InicioMediaEstado.mediaLista = [InicioMediaEstado.videoFondo, InicioMediaEstado.audioFondo];
};
