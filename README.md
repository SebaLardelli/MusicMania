# MusicMania - Juego de Adivinar Canciones

## Descripcion breve
MusicMania es un juego web inspirado en la estetica 8-bit y retro.  
El objetivo es adivinar canciones de distintas categorias en el menor tiempo posible.

## Idea del juego
- El jugador ingresa su nombre para comenzar la partida.
- El juego se organiza por niveles y categorias.
- En cada nivel suena una cancion y el jugador debe adivinar rapido.
- Al presionar la barra espaciadora se detiene el tema y se valida la respuesta.
- Se acepta respuesta por **nombre de la cancion** o **nombre de la banda**.
- Excepcion: en **Pelis-Series** y **Juegos** solo se acepta el nombre de la pelicula/serie o juego.
- Si el jugador falla la respuesta, termina la partida con cartel de **Game Over**.
- La cantidad de niveles por categoria depende de cuantas canciones haya en su carpeta.

## Sistema de puntaje
- Escala de puntaje por respuesta correcta: de **1 a 10**.
- Si adivina en los primeros 10 segundos, obtiene el puntaje mas alto.
- Si responde entre 10 y 20 segundos, obtiene la mitad del puntaje.
- Si responde despues de 20 segundos, obtiene 1 punto.
- Se registra tiempo total por categoria.
- Habra ranking de mejores jugadores por puntaje y tiempo.
- Los datos se guardan en `localStorage`.

## Estado actual del proyecto
Actualmente se completo la recopilacion de recursos:
- Imagenes para categorias.
- Canciones para las categorias del juego.

## Tecnologias
- HTML5
- CSS3 (diseno responsive con Flexbox)
- JavaScript ES5

## Proximos pasos
- Crear pantalla principal y seleccion de categoria.
- Implementar niveles, temporizador y validacion de respuestas.
- Agregar mensajes de victoria/derrota sin recargar la pagina.
- Crear ranking y persistencia completa en `localStorage`.
- Agregar pagina de contacto con validaciones en JavaScript.

## Repositorio
Link de GitHub del proyecto (abrir en nueva pestana):  
[Agregar URL del repositorio](https://github.com/tu-usuario/tu-repo)
