"use strict";

JuegoSonidos.reproducirNota = function (ctx, frecuencia, duracion, volumen) {
    var oscilador;
    var ganancia;
    var tiempoFin;
    if (!ctx) {
        return;
    }
    oscilador = ctx.createOscillator();
    ganancia = ctx.createGain();
    oscilador.type = "square";
    oscilador.frequency.value = frecuencia;
    ganancia.gain.value = volumen;
    oscilador.connect(ganancia);
    ganancia.connect(ctx.destination);
    tiempoFin = ctx.currentTime + duracion;
    oscilador.start(ctx.currentTime);
    ganancia.gain.setValueAtTime(volumen, ctx.currentTime);
    ganancia.gain.exponentialRampToValueAtTime(0.001, tiempoFin);
    oscilador.stop(tiempoFin);
};
