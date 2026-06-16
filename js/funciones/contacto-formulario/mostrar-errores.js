"use strict";

ContactoFormulario.mostrarErrores = function (errores) {
    if (ContactoFormularioEstado.errorNombre) {
        ContactoFormularioEstado.errorNombre.textContent = errores.nombre || "";
    }
    if (ContactoFormularioEstado.errorMail) {
        ContactoFormularioEstado.errorMail.textContent = errores.mail || "";
    }
    if (ContactoFormularioEstado.errorMensaje) {
        ContactoFormularioEstado.errorMensaje.textContent = errores.mensaje || "";
    }
};
