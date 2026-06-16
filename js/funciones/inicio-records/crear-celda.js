"use strict";

InicioRecords.crearCelda = function (texto, claseCss) {
    var celda = document.createElement("td");
    celda.textContent = texto;
    if (claseCss) {
        celda.className = claseCss;
    }
    return celda;
};
