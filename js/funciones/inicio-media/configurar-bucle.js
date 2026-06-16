"use strict";

InicioMedia.configurarBucle = function () {
    if (InicioMediaEstado.videoFondo) {
        InicioMediaEstado.videoFondo.loop = true;
        InicioMediaEstado.videoFondo.muted = true;
        InicioMediaEstado.videoFondo.playsInline = true;
    }
    if (InicioMediaEstado.audioFondo) {
        InicioMediaEstado.audioFondo.loop = true;
    }
};
