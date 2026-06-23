"use strict";

InicioMedia.reproducirAmbos = function () {
    let promesaVideo;
    let promesaAudio;
    if (!InicioMediaEstado.videoFondo || !InicioMediaEstado.audioFondo) {
        return;
    }
    InicioMedia.reiniciarTiempos();
    promesaVideo = InicioMediaEstado.videoFondo.play();
    promesaAudio = InicioMediaEstado.audioFondo.play();
    if (promesaVideo && typeof promesaVideo.catch === "function") {
        promesaVideo.catch(function () {
            InicioMedia.mostrarPantallaArranque();
        });
    }
    if (promesaAudio && typeof promesaAudio.catch === "function") {
        promesaAudio.catch(function () {
            InicioMedia.mostrarPantallaArranque();
        });
    }
};
