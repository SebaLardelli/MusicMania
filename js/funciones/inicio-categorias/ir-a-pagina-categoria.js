"use strict";

InicioCategorias.irAPaginaCategoria = function (dato, boton) {
    const destino = dato.paginaJuego;
    let resultadoNombre;
    if (typeof InicioJugador !== "undefined") {
        resultadoNombre = InicioJugador.guardarNombreActual();
        if (!resultadoNombre.ok) {
            InicioJugador.mostrarError(resultadoNombre.mensaje);
            if (document.getElementById("input-nombre-jugador")) {
                document.getElementById("input-nombre-jugador").focus();
            }
            return;
        }
        InicioJugador.limpiarError();
    }
    InicioCategoriasEstado.categoriaActiva = dato;
    InicioCategorias.quitarActivoTodos();
    if (boton) {
        boton.classList.add("activo");
    }
    InicioCategorias.guardarCategoria(dato);
    if (destino) {
        window.location.href = destino;
    }
};
