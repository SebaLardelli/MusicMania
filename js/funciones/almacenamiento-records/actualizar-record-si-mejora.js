"use strict";

AlmacenamientoRecords.actualizarRecordSiMejora = function (idCategoria, nombreJugador, puntaje, tiempoTotal, nivelMaximo) {
    var records = AlmacenamientoRecords.obtenerRecordsCompletos();
    var actual = records[idCategoria];
    var nuevoRecord;
    var resultado;
    var nivelAnterior;

    resultado = {
        mejoro: false,
        mejoroNivel: false,
        mejoroTiempo: false,
        mejoroPuntos: false
    };

    nuevoRecord = {
        nombreJugador: nombreJugador,
        puntaje: puntaje,
        tiempoTotal: tiempoTotal,
        nivelMaximo: nivelMaximo
    };

    if (!actual) {
        records[idCategoria] = nuevoRecord;
        AlmacenamientoRecords.guardarRecordsCompletos(records);
        resultado.mejoro = true;
        resultado.mejoroNivel = true;
        resultado.mejoroTiempo = true;
        resultado.mejoroPuntos = true;
        return resultado;
    }

    nivelAnterior = actual.nivelMaximo;
    if (typeof nivelAnterior !== "number") {
        nivelAnterior = 0;
    }

    if (nivelMaximo > nivelAnterior) {
        resultado.mejoro = true;
        resultado.mejoroNivel = true;
    } else if (nivelMaximo === nivelAnterior) {
        if (tiempoTotal < actual.tiempoTotal) {
            resultado.mejoro = true;
            resultado.mejoroTiempo = true;
        }
        if (puntaje > actual.puntaje) {
            resultado.mejoro = true;
            resultado.mejoroPuntos = true;
        }
    }

    if (resultado.mejoro) {
        records[idCategoria] = nuevoRecord;
        AlmacenamientoRecords.guardarRecordsCompletos(records);
    }

    return resultado;
};
