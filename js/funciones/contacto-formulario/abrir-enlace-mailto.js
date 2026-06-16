"use strict";

ContactoFormulario.abrirEnlaceMailto = function (urlMailto) {
    var enlace = document.createElement("a");
    enlace.href = urlMailto;
    enlace.style.display = "none";
    document.body.appendChild(enlace);
    enlace.click();
    document.body.removeChild(enlace);
};
