"use strict";

ContactoFormulario.construirEnlaceGmail = function (nombre, mail, mensaje) {
    var destino = "musicmania.contacto@ejemplo.com";
    var asunto = "Consulta desde MusicMania";
    var cuerpo = "";
    var enlace = "";

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

    enlace = "https://mail.google.com/mail/?view=cm&fs=1&to=" + encodeURIComponent(destino);
    enlace = enlace + "&su=" + encodeURIComponent(asunto);
    enlace = enlace + "&body=" + encodeURIComponent(cuerpo);

    return enlace;
};
