"use strict";

AlmacenamientoRecords.obtenerRecordCategoria = function (idCategoria) {
    const records = AlmacenamientoRecords.obtenerRecordsCompletos();
    if (records[idCategoria]) {
        return records[idCategoria];
    }
    return null;
};
