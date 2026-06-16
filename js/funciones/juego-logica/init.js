"use strict";

JuegoLogica.init = function (config) {
    JuegoEstado.configuracion = config;
    JuegoEstado.niveles = config.niveles;
    JuegoEstado.idCategoria = config.idCategoria;
    JuegoEstado.nombreCategoria = config.nombreVisible;
    JuegoEstado.audioNivel = document.getElementById("audio-nivel");
};
