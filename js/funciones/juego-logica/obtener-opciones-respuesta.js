"use strict";

JuegoLogica.obtenerOpcionesRespuesta = function (nivel) {
    const catalogo = datosOpcionesPorBanda[nivel.banda];
    let pool;
    let opciones;
    let restantes;
    let indice;
    let temporal;
    let aleatorio;

    if (!catalogo || catalogo.length === 0) {
        pool = [nivel.cancion];
    } else {
        pool = catalogo.slice();
        if (pool.indexOf(nivel.cancion) === -1) {
            pool.push(nivel.cancion);
        }
    }

    if (pool.length <= 4) {
        opciones = pool.slice();
    } else {
        restantes = [];
        for (indice = 0; indice < pool.length; indice = indice + 1) {
            if (pool[indice] !== nivel.cancion) {
                restantes.push(pool[indice]);
            }
        }
        for (indice = restantes.length - 1; indice > 0; indice = indice - 1) {
            aleatorio = Math.floor(Math.random() * (indice + 1));
            temporal = restantes[indice];
            restantes[indice] = restantes[aleatorio];
            restantes[aleatorio] = temporal;
        }
        opciones = [nivel.cancion, restantes[0], restantes[1], restantes[2]];
    }

    for (indice = opciones.length - 1; indice > 0; indice = indice - 1) {
        aleatorio = Math.floor(Math.random() * (indice + 1));
        temporal = opciones[indice];
        opciones[indice] = opciones[aleatorio];
        opciones[aleatorio] = temporal;
    }

    return opciones;
};
