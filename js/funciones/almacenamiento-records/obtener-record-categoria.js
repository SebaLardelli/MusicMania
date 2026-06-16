"use strict";

AlmacenamientoRecords.obtenerRecordCategoria = function (idCategoria) {
    var records = AlmacenamientoRecords.obtenerRecordsCompletos();
    if (records[idCategoria]) {
        return records[idCategoria];
    }
    return null;
};
