"use strict";

InicioCategorias.init = function () {
    InicioCategoriasEstado.contenedorLista = document.getElementById("lista-categorias");
    InicioCategorias.renderizarBotones();
    InicioCategorias.restaurarSeleccion();
};
