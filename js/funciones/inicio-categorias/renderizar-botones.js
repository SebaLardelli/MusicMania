"use strict";

InicioCategorias.renderizarBotones = function () {
    let indice;
    let boton;
    if (!InicioCategoriasEstado.contenedorLista || !datosCategorias) {
        return;
    }
    InicioCategoriasEstado.contenedorLista.innerHTML = "";
    for (indice = 0; indice < datosCategorias.length; indice = indice + 1) {
        boton = InicioCategorias.crearBotonCategoria(datosCategorias[indice]);
        InicioCategoriasEstado.contenedorLista.appendChild(boton);
    }
};
