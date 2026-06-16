"use strict";

InicioMedia.sincronizarYReproducir = function () {
    InicioMedia.reiniciarTiempos();
    if (InicioMediaEstado.requiereArranque) {
        InicioMedia.mostrarPantallaArranque();
        return;
    }
    InicioMedia.reproducirAmbos();
};
