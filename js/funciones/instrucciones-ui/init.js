"use strict";

InstruccionesUi.init = function (config) {
    var boton;
    var modal;
    var botonCerrar;
    if (!config) {
        return;
    }
    boton = document.getElementById(config.botonId);
    modal = document.getElementById(config.modalId);
    botonCerrar = document.getElementById(config.cerrarId);
    if (config.textoTiempoId && config.obtenerLimiteSegundos) {
        InstruccionesUi.actualizarTextoDinamico(config.textoTiempoId, config.obtenerLimiteSegundos);
    }
    if (!boton || !modal || !botonCerrar) {
        return;
    }
    boton.addEventListener("click", function () {
        if (config.textoTiempoId && config.obtenerLimiteSegundos) {
            InstruccionesUi.actualizarTextoDinamico(config.textoTiempoId, config.obtenerLimiteSegundos);
        }
        modal.classList.add("visible");
    });
    botonCerrar.addEventListener("click", function () {
        modal.classList.remove("visible");
    });
};
