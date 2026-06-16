"use strict";

ContactoFormulario.advertirSiArchivoLocal = function () {
    var aviso = document.getElementById("aviso-protocolo-local");

    if (window.location.protocol !== "file:") {
        return;
    }

    if (aviso) {
        aviso.classList.remove("oculta");
    }
};
