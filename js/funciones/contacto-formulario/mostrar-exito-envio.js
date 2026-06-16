"use strict";

ContactoFormulario.ocultarExitoEnvio = function () {
    if (ContactoFormularioEstado.panelExito) {
        ContactoFormularioEstado.panelExito.classList.add("oculta");
    }
};

ContactoFormulario.mostrarExitoEnvio = function (urlMailto, urlGmail) {
    if (ContactoFormularioEstado.enlaceEnviarCorreo) {
        ContactoFormularioEstado.enlaceEnviarCorreo.setAttribute("href", urlMailto);
    }
    if (ContactoFormularioEstado.enlaceGmail && urlGmail) {
        ContactoFormularioEstado.enlaceGmail.setAttribute("href", urlGmail);
    }
    if (ContactoFormularioEstado.panelExito) {
        ContactoFormularioEstado.panelExito.classList.remove("oculta");
    }
};
