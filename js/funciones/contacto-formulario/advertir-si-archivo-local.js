"use strict";

ContactoFormulario.advertirSiArchivoLocal = function () {
    const aviso = document.getElementById("aviso-protocolo-local");

    if (window.location.protocol !== "file:") {
        return;
    }

    if (aviso) {
        aviso.classList.remove("oculta");
    }
};
