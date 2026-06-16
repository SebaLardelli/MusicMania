"use strict";

UtilidadesTexto.reemplazarAcentos = function (texto) {
    var mapa = {
        "á": "a", "à": "a", "ä": "a", "â": "a",
        "é": "e", "è": "e", "ë": "e", "ê": "e",
        "í": "i", "ì": "i", "ï": "i", "î": "i",
        "ó": "o", "ò": "o", "ö": "o", "ô": "o",
        "ú": "u", "ù": "u", "ü": "u", "û": "u",
        "ñ": "n"
    };
    var resultado = "";
    var indice;
    var letra;
    for (indice = 0; indice < texto.length; indice = indice + 1) {
        letra = texto.charAt(indice);
        if (mapa[letra]) {
            resultado = resultado + mapa[letra];
        } else {
            resultado = resultado + letra;
        }
    }
    return resultado;
};
