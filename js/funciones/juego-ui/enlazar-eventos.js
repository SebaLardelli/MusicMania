"use strict";

JuegoUi.enlazarEventos = function () {
    const botonVolver = document.getElementById("boton-volver-inicio");
    const botonDetener = document.getElementById("boton-detener-musica");

    if (botonDetener) {
        botonDetener.addEventListener("click", function () {
            JuegoLogica.pausarParaResponder();
        });
    }

    botonVolver.addEventListener("click", function () {
        window.location.href = "index.html";
    });

    JuegoUiEstado.botonModalAccion.addEventListener("click", function () {
        JuegoUiEstado.modalResultado.classList.remove("visible");
        JuegoUi.ocultarImagenModal();
        if (JuegoUiEstado.callbackModal) {
            JuegoUiEstado.callbackModal();
            JuegoUiEstado.callbackModal = null;
        }
    });

    document.addEventListener("keydown", function (evento) {
        const estado = JuegoLogica.obtenerEstado();
        if (estado.estadoPartida === "escuchando") {
            if (evento.key === "Enter" || evento.key === " ") {
                evento.preventDefault();
                JuegoLogica.pausarParaResponder();
            }
        }
    });
};
