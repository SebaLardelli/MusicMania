"use strict";

JuegoUi.formatearMensajeNuevoRecord = function (resultado) {
    const partes = [];
    let indice;
    let texto = "";

    if (!resultado || !resultado.mejoro) {
        return "";
    }

    if (resultado.mejoroNivel) {
        partes.push("nivel");
    }
    if (resultado.mejoroTiempo) {
        partes.push("tiempo");
    }
    if (resultado.mejoroPuntos) {
        partes.push("puntos");
    }

    if (partes.length === 0) {
        return "";
    }

    texto = " ¡Nueva marca de ";
    if (partes.length === 1) {
        return texto + partes[0] + "!";
    }

    for (indice = 0; indice < partes.length - 1; indice = indice + 1) {
        texto = texto + partes[indice];
        if (indice < partes.length - 2) {
            texto = texto + ", ";
        }
    }

    return texto + " y " + partes[partes.length - 1] + "!";
};
