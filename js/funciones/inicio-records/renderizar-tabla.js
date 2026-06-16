"use strict";

InicioRecords.renderizarTabla = function () {
    var records;
    var indice;
    var categoria;
    var fila;
    var record;
    var textoNivel;

    if (!InicioRecordsEstado.cuerpoTabla || !datosCategorias) {
        return;
    }

    InicioRecordsEstado.cuerpoTabla.innerHTML = "";
    records = AlmacenamientoRecords.obtenerRecordsCompletos();

    for (indice = 0; indice < datosCategorias.length; indice = indice + 1) {
        categoria = datosCategorias[indice];
        record = records[categoria.id];
        fila = document.createElement("tr");

        if (record) {
            fila.className = "fila-record";
        }

        fila.appendChild(InicioRecords.crearCelda(categoria.nombreVisible));

        if (record) {
            fila.appendChild(InicioRecords.crearCelda(record.nombreJugador));
            if (typeof record.nivelMaximo === "number") {
                textoNivel = String(record.nivelMaximo);
            } else {
                textoNivel = "-";
            }
            fila.appendChild(InicioRecords.crearCelda(textoNivel, "celda-record-nivel"));
            fila.appendChild(InicioRecords.crearCelda(String(record.puntaje), "celda-record-puntaje"));
            fila.appendChild(InicioRecords.crearCelda(String(record.tiempoTotal) + " s", "celda-record-tiempo"));
        } else {
            fila.appendChild(InicioRecords.crearCelda("-"));
            fila.appendChild(InicioRecords.crearCelda("-"));
            fila.appendChild(InicioRecords.crearCelda("-"));
            fila.appendChild(InicioRecords.crearCelda("-"));
        }

        InicioRecordsEstado.cuerpoTabla.appendChild(fila);
    }
};
