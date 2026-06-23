"use strict";

InicioMedia.mostrarPantallaArranque = function () {
    const pantalla = document.getElementById("pantalla-arranque");
    if (pantalla) {
        pantalla.classList.remove("oculta");
    }
};
