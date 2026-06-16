"use strict";

InicioMedia.iniciarConInteraccion = function () {
    InicioMediaEstado.requiereArranque = false;
    InicioMedia.ocultarPantallaArranque();
    InicioMedia.reproducirAmbos();
};
