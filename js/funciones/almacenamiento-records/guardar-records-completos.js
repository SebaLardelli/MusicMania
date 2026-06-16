"use strict";

AlmacenamientoRecords.guardarRecordsCompletos = function (records) {
    var claveRecords = "musicmania_records";
    try {
        localStorage.setItem(claveRecords, JSON.stringify(records));
    } catch (errorStorage) {
        /* sin persistencia */
    }
};
