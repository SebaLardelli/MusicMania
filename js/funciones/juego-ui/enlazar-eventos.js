"use strict";

JuegoUi.enlazarEventos = function () {
    var botonConfirmar = document.getElementById("boton-confirmar-respuesta");
    var botonVolver = document.getElementById("boton-volver-inicio");
    var botonDetener = document.getElementById("boton-detener-musica");

    botonConfirmar.addEventListener("click", function () {
        JuegoLogica.confirmarRespuesta(JuegoUiEstado.inputRespuesta.value);
    });

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
        var estado = JuegoLogica.obtenerEstado();
        if (estado.estadoPartida === "escuchando") {
            if (evento.key === "Enter" || evento.key === " ") {
                evento.preventDefault();
                JuegoLogica.pausarParaResponder();
            }
        }
        if (evento.key === "Enter" && estado.estadoPartida === "respondiendo") {
            if (document.activeElement === JuegoUiEstado.inputRespuesta) {
                evento.preventDefault();
                JuegoLogica.confirmarRespuesta(JuegoUiEstado.inputRespuesta.value);
            }
        }
    });
};
