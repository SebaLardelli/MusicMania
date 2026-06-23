"use strict";

InstruccionesUi.actualizarTextoDinamico = function (textoTiempoId, obtenerLimiteSegundos) {
    let elemento;
    let limite;
    if (!textoTiempoId || !obtenerLimiteSegundos) {
        return;
    }
    elemento = document.getElementById(textoTiempoId);
    if (!elemento) {
        return;
    }
    limite = obtenerLimiteSegundos();
    elemento.textContent = "⏳ Al detener la musica tenes " + limite + " segundos para responder. 🔊 Cada segundo suena un pitido.";
};
