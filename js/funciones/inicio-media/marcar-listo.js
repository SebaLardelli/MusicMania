"use strict";

InicioMedia.marcarListo = function () {
    InicioMediaEstado.listoContador = InicioMediaEstado.listoContador + 1;
    if (InicioMediaEstado.listoContador >= InicioMediaEstado.mediaLista.length) {
        InicioMedia.sincronizarYReproducir();
    }
};
