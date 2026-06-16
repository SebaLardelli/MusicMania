"use strict";

ContactoFormulario.enviarCorreo = function (nombre, mail, mensaje) {
    var urlMailto = ContactoFormulario.construirEnlaceMailto(nombre, mail, mensaje);
    var urlGmail = ContactoFormulario.construirEnlaceGmail(nombre, mail, mensaje);

    ContactoFormulario.mostrarExitoEnvio(urlMailto, urlGmail);

    if (window.location.protocol === "file:") {
        return;
    }

    ContactoFormulario.abrirEnlaceMailto(urlMailto);
};
