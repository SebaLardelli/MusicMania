"use strict";

JuegoLogica.confirmarRespuesta = function (textoRespuesta) {
    const nivel = JuegoLogica.obtenerNivelActual();
    let puntosNivel;
    let esCorrecta;
    let resultadoRecord;

    if (JuegoEstado.estadoPartida !== "respondiendo" || !nivel) {
        return;
    }

    JuegoLogica.detenerTimerRespuesta();
    esCorrecta = UtilidadesTexto.normalizarTexto(textoRespuesta) === UtilidadesTexto.normalizarTexto(nivel.cancion);

    if (!esCorrecta) {
        JuegoEstado.estadoPartida = "derrota";
        resultadoRecord = JuegoLogica.registrarRecordPartida(nivel.nivel);
        if (typeof JuegoUi !== "undefined" && JuegoUi.mostrarDerrota) {
            JuegoUi.mostrarDerrota(nivel, JuegoEstado.puntajeTotal, resultadoRecord);
        }
        return;
    }

    puntosNivel = JuegoLogica.calcularPuntosPorTiempo(JuegoEstado.segundosNivelActual);
    JuegoEstado.puntajeTotal = JuegoEstado.puntajeTotal + puntosNivel;
    JuegoEstado.tiempoTotalSegundos = JuegoEstado.tiempoTotalSegundos + JuegoEstado.segundosNivelActual;
    JuegoEstado.indiceNivelActual = JuegoEstado.indiceNivelActual + 1;

    if (JuegoEstado.indiceNivelActual >= JuegoEstado.niveles.length) {
        JuegoEstado.estadoPartida = "victoria";
        resultadoRecord = JuegoLogica.registrarRecordPartida(JuegoEstado.niveles.length);
        if (typeof JuegoUi !== "undefined" && JuegoUi.mostrarVictoria) {
            JuegoUi.mostrarVictoria(
                JuegoEstado.puntajeTotal,
                JuegoEstado.tiempoTotalSegundos,
                JuegoEstado.nombreCategoria,
                nivel,
                resultadoRecord
            );
        }
        return;
    }

    JuegoEstado.estadoPartida = "esperando-siguiente";
    if (typeof JuegoUi !== "undefined" && JuegoUi.mostrarNivelSuperado) {
        JuegoUi.mostrarNivelSuperado(puntosNivel, JuegoEstado.puntajeTotal, nivel, function () {
            JuegoLogica.reproducirNivelActual();
        });
    }
};
