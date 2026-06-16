"use strict";

ContactoFormulario.validarFormulario = function () {
    var nombre = "";
    var mail = "";
    var mensaje = "";
    var errores = {
        nombre: "",
        mail: "",
        mensaje: ""
    };
    var valido = true;

    if (ContactoFormularioEstado.inputNombre) {
        nombre = ContactoFormularioEstado.inputNombre.value;
    }
    if (ContactoFormularioEstado.inputMail) {
        mail = ContactoFormularioEstado.inputMail.value;
    }
    if (ContactoFormularioEstado.inputMensaje) {
        mensaje = ContactoFormularioEstado.inputMensaje.value;
    }

    if (!UtilidadesTexto.nombreEsAlfanumerico(nombre)) {
        errores.nombre = "El nombre debe ser alfanumerico (solo letras y numeros).";
        valido = false;
    }
    if (!UtilidadesTexto.mailEsValido(mail)) {
        errores.mail = "Ingresa un mail valido.";
        valido = false;
    }
    if (mensaje.replace(/^\s+|\s+$/g, "").length <= 5) {
        errores.mensaje = "El mensaje debe tener mas de 5 caracteres.";
        valido = false;
    }

    return {
        ok: valido,
        errores: errores,
        nombre: nombre.replace(/^\s+|\s+$/g, ""),
        mail: mail.replace(/^\s+|\s+$/g, ""),
        mensaje: mensaje.replace(/^\s+|\s+$/g, "")
    };
};
