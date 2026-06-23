"use strict";

InicioRecords.crearCelda = function (texto, claseCss) {
    const celda = document.createElement("td");
    celda.textContent = texto;
    if (claseCss) {
        celda.className = claseCss;
    }
    return celda;
};
