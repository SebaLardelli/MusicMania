"use strict";

ContactoFormulario.enlazarEventos = function () {
    if (!ContactoFormularioEstado.formulario) {
        return;
    }
    ContactoFormularioEstado.formulario.addEventListener("submit", function (evento) {
        var resultado;

        evento.preventDefault();
        ContactoFormulario.limpiarErrores();
        ContactoFormulario.ocultarExitoEnvio();
        resultado = ContactoFormulario.validarFormulario();

        if (!resultado.ok) {
            ContactoFormulario.mostrarErrores(resultado.errores);
            return;
        }

        ContactoFormulario.enviarCorreo(resultado.nombre, resultado.mail, resultado.mensaje);
    });
};
