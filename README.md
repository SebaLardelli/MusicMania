# MusicMania - Juego de Adivinar Canciones

Inspirado en streams como OLGA y similares. Juego web con estética 8-bit donde el jugador debe reconocer temas musicales y adivinar la respuesta correcta en el menor tiempo posible.

**Repositorio:** [https://github.com/SebaLardelli/MusicMania](https://github.com/SebaLardelli/MusicMania)

---

## Descripcion breve

MusicMania es un videojuego web desarrollado para la materia **Desarrollo y Arquitecturas Web (DAW) 2026**. El jugador elige una categoria, escucha un tema en version 8-bit y debe adivinarlo antes de quedarse sin tiempo o sin vidas.

---

## Como jugar

1. En el menu principal (`index.html`) ingresa tu **nombre** (minimo 3 letras) y elige una **categoria**.
2. Suena un tema 8-bit. Escuchalo hasta reconocerlo.
3. Detene la musica con **Espacio**, **Enter** o el boton **Detener musica**.
4. Tenes **6 segundos** para escribir y confirmar tu respuesta (con pitidos de cuenta regresiva).
5. Si acertas, avanzas al siguiente nivel. Si fallas o se agota el tiempo, **fin del juego** (1 vida por partida).
6. Al completar todos los niveles de una categoria, ganas la partida.

### Reglas de respuesta

| Categoria | Que se acepta |
|-----------|----------------|
| Rock, Pop, Electronica, Metal | Nombre de la **cancion** o del **artista/banda** |
| Pelis y Series | Solo nombre de la **pelicula o serie** (ej. *Cazafantasmas* tambien vale para Ghostbusters) |
| Juegos | Solo nombre del **videojuego** |

### Sistema de puntaje

- Escala por acierto: de **1 a 10** puntos segun el tiempo de escucha.
- Menos de 10 segundos escuchando: **10 puntos**.
- Entre 10 y 20 segundos: **5 puntos**.
- Mas de 20 segundos: **1 punto**.
- Se acumula **tiempo total** y **puntaje** por partida.
- Los mejores marcas por categoria se guardan en `localStorage` y se muestran en la tabla del inicio.

---

## Categorias y niveles

Todas las categorias estan **disponibles** y funcionales:

| Categoria | Pagina | Niveles | Contenido |
|-----------|--------|---------|-----------|
| Rock | `juego-rock.html` | 10 | Guns N' Roses, Kiss, Oasis, Queen, etc. |
| Pop | `juego-pop.html` | 10 | Bruno Mars, Coldplay, Michael Jackson, etc. |
| Electronica | `juego-electronica.html` | 7 | PSY, Martin Garrix, Avicii, Skrillex, etc. |
| Metal | `juego-metal.html` | 7 | Metallica, Iron Maiden, Slipknot, etc. |
| Pelis y Series | `juego-pelis-series.html` | 10 | Harry Potter, Pokemon, Star Wars, Top Gun, etc. |
| Juegos | `juego-juegos.html` | 8 | Mario, GTA SA, Minecraft, Zelda, etc. |

La cantidad de niveles depende de las carpetas en `assets/categorias/`. Cada nivel tiene su MP3 e imagen (calcomania revelada al acertar).

---

## Estado actual del proyecto

### Implementado

**Menu principal (`index.html`)**
- Video y musica de fondo en bucle, sincronizados al presionar **Jugar**.
- Campo de nombre del jugador con validacion (minimo 3 letras) y persistencia en `localStorage`.
- Seleccion de categoria con navegacion dinamica (generada desde `js/datos/datos-categorias.js`).
- Tabla de mejores marcas por categoria (mejor puntaje y tiempo).
- Modal de **Instrucciones** (sin `alert`).
- Control de **volumen** con slider, porcentaje y boton silenciar (persistente en `localStorage`).

**Pantallas de juego (una por categoria)**
- Misma logica compartida modular en `js/funciones/juego-*` + `juego-main.js`.
- Configuracion por categoria: `js/config/juego-config-*.js` + `js/datos/datos-niveles-*.js`.
- HUD dinamico: jugador, nivel, tiempo, puntos, vidas.
- Modales para acierto, fin del juego y victoria (con imagen de calcomania al acertar).
- Pitidos de cuenta regresiva con Web Audio API (`js/funciones/juego-sonidos/`), respetando el volumen configurado.
- Reinicio de partida sin recargar la pagina.
- Temas visuales por genero (colores en `juego.css`).
- Instrucciones especificas por categoria.
- Control de volumen en partida.

**Arquitectura y buenas practicas (segun consigna)**
- HTML5 semantico, `reset.css`, sin estilos ni JS inline.
- CSS con **Flexbox** (sin Grid ni Float).
- JavaScript **ES5** estricto (`"use strict"`, sin `let`/`const`/arrow functions).
- Logica separada en multiples archivos JS (un archivo por funcion, ES5).
- Modulos con namespaces (`js/namespaces/`), estado compartido (`js/estado/`) y funciones (`js/funciones/`).
- Persistencia con `localStorage` (jugador, marcas, volumen).
- `.gitignore` configurado.

### Pagina de contacto (`contacto.html`)

- Formulario con nombre, mail y mensaje.
- Validaciones exclusivamente en JavaScript (nombre alfanumerico, mail valido, mensaje > 5 caracteres).
- Al enviar, abre el cliente de correo del sistema operativo via `mailto:`.
- Enlace visible desde el menu principal (`index.html`).

### Documentacion adicional

- **Prompts IA** en `Prompts-IA.md` (si se utilizo IA en el desarrollo).

---

## Cumplimiento de la consigna del examen

Referencia: `ExamenFinal-DAW-2026.txt`

### Requerimientos obligatorios

| Requisito | Estado |
|-----------|--------|
| HTML5, CSS3 y ES5 estricto | Cumplido |
| Responsividad con Flexbox | Cumplido |
| Sin `alert` (modales) | Cumplido |
| Juego funcional para un jugador | Cumplido |
| Nombre del jugador (min. 3 letras) | Cumplido (menu principal) |
| Inicio sin recargar pagina | Cumplido |
| Mensajes visuales al ganar/perder | Cumplido |
| Reiniciar sin recargar | Cumplido |
| Validacion de inputs | Cumplido (nombre, respuestas) |
| Condicion de victoria y derrota | Cumplido |
| Puntaje, tiempo, vidas o progreso | Cumplido |
| Actualizacion dinamica del DOM | Cumplido |
| Teclado y mouse | Cumplido |
| Pantalla principal / menu | Cumplido |
| Sin librerias externas en la logica | Cumplido |
| Generacion dinamica de elementos | Cumplido (categorias, tabla de marcas) |
| Persistencia con LocalStorage | Cumplido |
| Pagina de Contacto | Cumplido |

### Requerimientos deseados incorporados

- Musica y sonidos (fondo, niveles, pitidos de tiempo).
- Sistema de niveles por categoria.
- Ranking / mejores marcas en `localStorage`.
- Sistema de vidas (1 vida por partida).
- Pantalla de instrucciones / tutorial.
- Pantalla de fin del juego personalizada con modal.
- Configuracion de volumen persistente.
- Estetica 8-bit con efectos visuales.

---

## Evolucion del desarrollo

### Base del proyecto
- Estructura inicial con menu, Rock funcional y pantallas "proximamente" para el resto.
- Logica de juego: escuchar, pausar, responder, puntaje por tiempo, 1 vida.
- Recursos multimedia centralizados en `assets/`.

### Mejoras de jugabilidad y UX
- Nombre del jugador en el menu con `localStorage` (sin pantalla extra al entrar al juego).
- Temporizador de respuesta de **6 segundos** con pitidos por segundo.
- Modales en lugar de `alert` para resultados, victoria y fin del juego.
- Imagen de calcomania solo al acertar (modal con fondo blanco).
- Instrucciones en menu y en cada pantalla de juego.

### Estetica
- Colores mas vivos (violeta, acentos por categoria).
- Fondo estatico en juego (sin video del pato).
- Temas por genero en `juego.css` (`pagina-juego--rock`, `--pop`, etc.).

### Control de volumen
- Slider 0–100 %, texto de porcentaje y boton silenciar.
- Persistencia en `musicmania_volumen`.
- Integrado en menu y en todas las pantallas de juego.
- Pitidos del contador escalados segun el volumen elegido.

### Categorias implementadas (en orden)
1. **Rock** (10 niveles).
2. **Pop** (10 niveles).
3. **Electronica** (7 niveles).
4. **Metal** (7 niveles).
5. **Pelis y Series** (10 niveles) — solo nombre de obra.
6. **Juegos** (8 niveles) — solo nombre del videojuego.

---

### Organizacion de assets

Todo el contenido estatico (imagenes, audio y video) vive dentro de `assets/`, separado del codigo (`css/`, `js/`) y de los HTML, como pide la consigna del examen.

| Carpeta | Contenido |
|---------|-----------|
| `assets/imagenes/` | Icono del sitio (`icono.png`) |
| `assets/inicio/audio/` | Musica de fondo del menu |
| `assets/inicio/video/` | Video de fondo del menu |
| `assets/categorias/` | MP3 e imagenes de cada nivel, agrupados por genero |

Convencion por nivel dentro de `assets/categorias/`:

```
assets/categorias/Rock/Guns and Roses - 1/
  cancion.mp3
  calcomania.png
```

---

## Estructura del repositorio

```
MusicMania/
  index.html
  contacto.html
  juego-rock.html
  juego-pop.html
  juego-electronica.html
  juego-metal.html
  juego-pelis-series.html
  juego-juegos.html
  ExamenFinal-DAW-2026.txt
  README.md
  .gitignore
  css/
    reset.css
    inicio.css
    contacto.css
    juego.css
    juego-proximamente.css
    instrucciones.css
    volumen.css
  js/
    inicio-main.js              # entry point menu
    juego-main.js               # entry point juego
    datos/
      datos-categorias.js
      datos-niveles-*.js
    config/
      juego-config-*.js
    namespaces/                 # var Modulo = {}
    estado/                     # estado compartido por modulo
    funciones/                  # una funcion por archivo
      utilidades-texto/
      almacenamiento-*/
      control-volumen/
      juego-sonidos/
      juego-logica/
      juego-ui/
      inicio-*/
      instrucciones-ui/
    manifests/
      inicio-scripts.js         # referencia de orden (no loader)
      juego-scripts.js
  assets/
    imagenes/
      icono.png
    inicio/
      audio/death-by-glamour.mp3
      video/videoplayback.mp4
    categorias/
      Rock/
      Pop/
      Electronica/
      Metal/
      Pelis-Series/
      Juegos/
```

---

## Tecnologias

- HTML5
- CSS3 (Flexbox, media queries al final de cada hoja)
- JavaScript ES5 (`var`, funciones tradicionales, IIFE, `"use strict"`)
- Web Audio API (pitidos del temporizador)
- LocalStorage

---

## Como ejecutar el proyecto

Los archivos MP3 deben servirse por HTTP. Abrir con `file://` puede fallar al cargar audio.

1. Copiar el proyecto a la carpeta de XAMPP (ej. `C:\xampp\htdocs\MusicMania\`).
2. Iniciar Apache en XAMPP.
3. Abrir en el navegador: `http://localhost/MusicMania/`

---

## Proximos pasos

- Revisar responsive en mobile y tablet.
- Actualizar `js/datos/datos-contacto.js` con el mail real de destino.

---

## Repositorio

[https://github.com/SebaLardelli/MusicMania](https://github.com/SebaLardelli/MusicMania)
