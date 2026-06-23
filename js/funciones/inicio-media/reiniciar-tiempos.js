"use strict";

InicioMedia.reiniciarTiempos = function () {
    let indice;
    for (indice = 0; indice < InicioMediaEstado.mediaLista.length; indice = indice + 1) {
        if (InicioMediaEstado.mediaLista[indice]) {
            InicioMediaEstado.mediaLista[indice].currentTime = 0;
        }
    }
};
