"use strict";

JuegoUi.renderizarBarrasEcualizador = function () {
    var contenedor = document.querySelector(".visual-ecualizador");
    var indice = 0;
    var barra = null;

    if (!contenedor || contenedor.children.length > 0) {
        return;
    }

    for (indice = 0; indice < 5; indice = indice + 1) {
        barra = document.createElement("span");
        barra.className = "barra-ecualizador";
        contenedor.appendChild(barra);
    }
};
