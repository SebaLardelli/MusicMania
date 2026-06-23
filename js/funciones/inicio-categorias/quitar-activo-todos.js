"use strict";

InicioCategorias.quitarActivoTodos = function () {
    const botones = InicioCategoriasEstado.contenedorLista.querySelectorAll(".boton-categoria");
    let indice;
    for (indice = 0; indice < botones.length; indice = indice + 1) {
        botones[indice].classList.remove("activo");
    }
};
