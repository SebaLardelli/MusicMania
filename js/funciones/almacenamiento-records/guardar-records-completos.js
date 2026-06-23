"use strict";

AlmacenamientoRecords.guardarRecordsCompletos = function (records) {
    const claveRecords = "musicmania_records";
    try {
        localStorage.setItem(claveRecords, JSON.stringify(records));
    } catch (errorStorage) {
        /* sin persistencia */
    }
};
