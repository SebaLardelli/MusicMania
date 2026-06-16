"use strict";

InicioMedia.enlazarEventos = function () {
    var botonArranque = document.getElementById("boton-arranque");
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
