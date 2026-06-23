"use strict";

JuegoUi.obtenerElementos = function () {
    JuegoUiEstado.pantallaJuego = document.getElementById("pantalla-juego");
    JuegoUiEstado.pantallaRespuesta = document.getElementById("pantalla-respuesta");
    JuegoUiEstado.modalResultado = document.getElementById("modal-resultado");
    JuegoUiEstado.contenedorOpcionesRespuesta = document.getElementById("contenedor-opciones-respuesta");
    JuegoUiEstado.textoNivel = document.getElementById("texto-nivel");
    JuegoUiEstado.textoTimer = document.getElementById("texto-timer");
    JuegoUiEstado.textoPuntaje = document.getElementById("texto-puntaje");
    JuegoUiEstado.textoVidas = document.getElementById("texto-vidas");
    JuegoUiEstado.textoJugador = document.getElementById("texto-jugador");
    JuegoUiEstado.textoAyuda = document.getElementById("texto-ayuda-juego");
    JuegoUiEstado.textoAyudaRespuesta = document.getElementById("texto-ayuda-respuesta");
    JuegoUiEstado.panelNivelVisual = document.getElementById("panel-nivel-visual");
    JuegoUiEstado.marcoMisterio = document.getElementById("marco-misterio");
    JuegoUiEstado.textoBandaNivel = document.getElementById("texto-banda-nivel");
    JuegoUiEstado.modalImagenContenedor = document.getElementById("modal-imagen-contenedor");
    JuegoUiEstado.modalImagenNivel = document.getElementById("modal-imagen-nivel");
    JuegoUiEstado.textoModalTitulo = document.getElementById("modal-resultado-titulo");
    JuegoUiEstado.textoModalCuerpo = document.getElementById("modal-resultado-cuerpo");
    JuegoUiEstado.botonModalAccion = document.getElementById("modal-resultado-boton");
};
