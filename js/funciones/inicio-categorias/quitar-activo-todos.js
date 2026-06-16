"use strict";

InicioCategorias.quitarActivoTodos = function () {
    var botones = InicioCategoriasEstado.contenedorLista.querySelectorAll(".boton-categoria");
    var indice;
    for (indice = 0; indice < botones.length; indice = indice + 1) {
        botones[indice].classList.remove("activo");
    }
};
