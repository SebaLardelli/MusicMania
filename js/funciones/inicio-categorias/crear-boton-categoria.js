"use strict";

InicioCategorias.crearBotonCategoria = function (dato) {
    const boton = document.createElement("button");
    boton.type = "button";
    boton.className = "boton-categoria " + dato.claseCalco;
    boton.setAttribute("data-categoria-id", dato.id);
    boton.setAttribute("data-categoria-carpeta", dato.carpeta);
    boton.setAttribute("data-pagina-juego", dato.paginaJuego);
    boton.textContent = dato.nombreVisible;
    if (!dato.disponible) {
        boton.classList.add("boton-categoria--proximamente");
        boton.setAttribute("aria-label", dato.nombreVisible + ", proximamente");
    }
    boton.addEventListener("click", function () {
        InicioCategorias.irAPaginaCategoria(dato, boton);
    });
    return boton;
};
