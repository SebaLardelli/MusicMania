"use strict";

AlmacenamientoRecords.obtenerRecordsCompletos = function () {
    let datos;
    let parseados;
    const claveRecords = "musicmania_records";
    if (!window.localStorage) {
        return {};
    }
    datos = localStorage.getItem(claveRecords);
    if (!datos) {
        return {};
    }
    try {
        parseados = JSON.parse(datos);
    } catch (errorParse) {
        return {};
    }
    if (typeof parseados !== "object" || parseados === null) {
        return {};
    }
    return parseados;
};
