"use strict";

ContactoFormulario.limpiarErrores = function () {
    if (ContactoFormularioEstado.errorNombre) {
        ContactoFormularioEstado.errorNombre.textContent = "";
    }
    if (ContactoFormularioEstado.errorMail) {
        ContactoFormularioEstado.errorMail.textContent = "";
    }
    if (ContactoFormularioEstado.errorMensaje) {
        ContactoFormularioEstado.errorMensaje.textContent = "";
    }
};
