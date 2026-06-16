"use strict";

InicioMedia.mostrarPantallaArranque = function () {
    var pantalla = document.getElementById("pantalla-arranque");
    if (pantalla) {
        pantalla.classList.remove("oculta");
    }
};
