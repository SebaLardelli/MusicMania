"use strict";

InicioMedia.enlazarEventos = function () {
    const botonArranque = document.getElementById("boton-arranque");
    if (InicioMediaEstado.videoFondo) {
        InicioMediaEstado.videoFondo.addEventListener("loadedmetadata", InicioMedia.marcarListo);
    }
    if (InicioMediaEstado.audioFondo) {
        InicioMediaEstado.audioFondo.addEventListener("loadedmetadata", InicioMedia.marcarListo);
    }
    if (botonArranque) {
        botonArranque.addEventListener("click", InicioMedia.iniciarConInteraccion);
    }
};
