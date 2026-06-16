# Prompts IA — MusicMania


**Modelo:** Claude (Anthropic)


## 1. Estructura del proyecto

**Prompt:** ¿Cómo organizo las carpetas de `js/` separando datos, lógica e interfaz?

**Respuesta:** `datos/`, `config/`, `namespaces/`, `estado/` y `funciones/`.

**Uso:** Base modular del proyecto en ES5.



## 2. Barra de volumen

**Prompt:** ¿Cómo hago una barra deslizante de volumen con porcentaje visible?

**Respuesta:** `input type="range"` (0–100) y un `span` con el valor en `css/volumen.css`.

**Uso:** Menú y pantallas de juego.



## 3. Guardar volumen

**Prompt:** ¿Cómo guardo el volumen elegido en `localStorage`?

**Respuesta:** Módulo `AlmacenamientoVolumen` con clave `musicmania_volumen`.

**Uso:** `js/funciones/almacenamiento-volumen/`.



## 4. Silenciar música

**Prompt:** ¿Cómo agrego un botón para silenciar y activar la música?

**Respuesta:** `ControlVolumen.alternarMute` cambia `audio.muted` y el texto del botón.

**Uso:** `js/funciones/control-volumen/alternar-mute.js`.



## 5. Modales

**Prompt:** ¿Cómo muestro mensajes al jugador con modales en lugar de `alert`?

**Respuesta:** `JuegoUi.abrirModal` actualiza título, cuerpo y botón del modal en el DOM.

**Uso:** Victoria, derrota y nivel superado.



## 6. Guardar nombre

**Prompt:** ¿Cómo guardo el nombre del jugador en `localStorage`?

**Respuesta:** `AlmacenamientoJugador.guardarNombre` con su clave propia.

**Uso:** `js/funciones/almacenamiento-jugador/`.



## 7. Categorías dinámicas

**Prompt:** ¿Cómo genero los botones de categoría desde JavaScript?

**Respuesta:** `createElement("button")` y `appendChild` desde `datosCategorias`.

**Uso:** `js/funciones/inicio-categorias/`.



## 8. Cuenta regresiva

**Prompt:** ¿Cómo implemento una cuenta regresiva de 6 segundos para responder?

**Respuesta:** `setInterval` en `iniciar-timer-respuesta.js` y texto en pantalla.

**Uso:** Fase de respuesta después de detener la música.



## 9. Pitidos

**Prompt:** ¿Cómo genero pitidos de aviso con Web Audio API?

**Respuesta:** `JuegoSonidos.reproducirNota` con oscilador y ganancia.

**Uso:** Un pitido por segundo en la cuenta regresiva.



## 10. Página de contacto

**Prompt:** ¿Cómo hago una página de contacto con validación JS y envío por mailto?

**Respuesta:** Validar con JS y abrir `mailto:` con `window.location.href` mas enlace visible de respaldo.

**Uso:** `contacto.html` y `js/funciones/contacto-formulario/`.



## 11. Revisión de la consigna

**Prompt:** ¿MusicMania cumple `ExamenFinal-DAW-2026.txt`?

**Respuesta:** Revisión de HTML, CSS, JS ES5 y requisitos obligatorios del examen.

**Uso:** Chequeo previo a la entrega.
