"use strict";

InicioCategorias.guardarCategoria = function (dato) {
    var datosGuardar = {
        id: dato.id,
        nombreVisible: dato.nombreVisible,
        carpeta: dato.carpeta,
        paginaJuego: dato.paginaJuego,
        disponible: dato.disponible
    };
    try {
        localStorage.setItem(InicioCategoriasEstado.claveStorage, JSON.stringify(datosGuardar));
    } catch (errorStorage) {
        /* sin persistencia si el navegador lo bloquea */
    }
};
