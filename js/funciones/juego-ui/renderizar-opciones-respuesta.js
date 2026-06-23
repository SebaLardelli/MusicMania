"use strict";

JuegoUi.renderizarOpcionesRespuesta = function (opciones) {
    const contenedor = JuegoUiEstado.contenedorOpcionesRespuesta;
    let indice;
    let boton;

    if (!contenedor) {
        return;
    }

    contenedor.innerHTML = "";

    for (indice = 0; indice < opciones.length; indice = indice + 1) {
        boton = document.createElement("button");
        boton.type = "button";
        boton.className = "boton-opcion-respuesta";
        boton.textContent = opciones[indice];
        boton.addEventListener("click", function (evento) {
            const textoSeleccionado = evento.currentTarget.textContent;
            JuegoLogica.confirmarRespuesta(textoSeleccionado);
        });
        contenedor.appendChild(boton);
    }
};
