"use strict";

InicioCategorias.restaurarSeleccion = function () {
    let datosGuardados;
    let parseados;
    let datoCompleto;
    let indice;
    let botones;
    if (!window.localStorage) {
        return;
    }
    datosGuardados = localStorage.getItem(InicioCategoriasEstado.claveStorage);
    if (!datosGuardados) {
        return;
    }
    try {
        parseados = JSON.parse(datosGuardados);
    } catch (errorParse) {
        return;
    }
    datoCompleto = InicioCategorias.obtenerDatoPorId(parseados.id);
    if (!datoCompleto) {
        return;
    }
    InicioCategoriasEstado.categoriaActiva = datoCompleto;
    botones = InicioCategoriasEstado.contenedorLista.querySelectorAll(".boton-categoria");
    for (indice = 0; indice < botones.length; indice = indice + 1) {
        if (botones[indice].getAttribute("data-categoria-id") === datoCompleto.id) {
            botones[indice].classList.add("activo");
        }
    }
};
