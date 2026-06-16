"use strict";

ContactoFormulario.init = function () {
    ContactoFormularioEstado.formulario = document.getElementById("formulario-contacto");
    ContactoFormularioEstado.inputNombre = document.getElementById("input-contacto-nombre");
    ContactoFormularioEstado.inputMail = document.getElementById("input-contacto-mail");
    ContactoFormularioEstado.inputMensaje = document.getElementById("input-contacto-mensaje");
    ContactoFormularioEstado.errorNombre = document.getElementById("error-contacto-nombre");
    ContactoFormularioEstado.errorMail = document.getElementById("error-contacto-mail");
    ContactoFormularioEstado.errorMensaje = document.getElementById("error-contacto-mensaje");
    ContactoFormularioEstado.panelExito = document.getElementById("panel-exito-envio");
    ContactoFormularioEstado.enlaceEnviarCorreo = document.getElementById("enlace-enviar-correo");
    ContactoFormularioEstado.enlaceGmail = document.getElementById("enlace-gmail");
    ContactoFormulario.advertirSiArchivoLocal();
    ContactoFormulario.ocultarExitoEnvio();
    ContactoFormulario.enlazarEventos();
};
