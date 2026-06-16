"use strict";

InicioMedia.ocultarPantallaArranque = function () {
    var pantalla = document.getElementById("pantalla-arranque");
    if (pantalla) {
        pantalla.classList.add("oculta");
    }
};
