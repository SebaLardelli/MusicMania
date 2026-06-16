"use strict";

ContactoFormulario.construirEnlaceMailto = function (nombre, mail, mensaje) {
    var destino = "musicmania.contacto@ejemplo.com";
    var asunto = "Consulta desde MusicMania";
    var cuerpo = "";

    if (typeof datosContacto !== "undefined") {
        if (datosContacto.correoDestino) {
            destino = datosContacto.correoDestino;
        }
        if (datosContacto.asuntoPredeterminado) {
            asunto = datosContacto.asuntoPredeterminado;
        }
    }

    cuerpo = "Nombre: " + nombre + "\n";
    cuerpo = cuerpo + "Mail: " + mail + "\n\n";
    cuerpo = cuerpo + mensaje;

    return "mailto:" + destino + "?subject=" + encodeURIComponent(asunto) + "&body=" + encodeURIComponent(cuerpo);
};
