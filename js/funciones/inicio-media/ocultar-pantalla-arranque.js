"use strict";

InicioMedia.ocultarPantallaArranque = function () {
    const pantalla = document.getElementById("pantalla-arranque");
    if (pantalla) {
        pantalla.classList.add("oculta");
    }
};
