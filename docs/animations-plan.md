# Diseño de Animaciones y Experiencia (Animation Plan)

## Objetivo
Transformar arreglos de datos (tarjetas de proyectos y tarjetas de experiencia) en una "línea de tiempo" horizontal que se desplaza hacia la izquierda cuando el usuario hace scroll hacia abajo. Cada elemento dentro de los arreglos debe verse como una tarjeta grande y detallada.

## Enfoque (GSAP ScrollTrigger + Pinning)

### Estructura HTML Requerida
Cada sección (Proyectos / Experiencia) necesitará la siguiente estructura jerárquica:

1. **Section Wrapper** (`.section-wrapper`): El contenedor principal que GSAP utilizará como `trigger`.
2. **Scroll Container** (`.scroll-container`): Un contenedor ancho, cuyo `width` será el 100% multiplicado por el número de tarjetas (`width: 100vw * N`). Se usará flexbox (`display: flex`) o una cuadrícula de una sola fila para colocar las tarjetas una al lado de la otra.
3. **Card Item** (`.card-item`): La tarjeta individual en sí (`width: 100vw` o ligeramente inferior como `90vw` para márgenes intermedios).

### Algoritmo de Animación
1. **Configuración del Pin:** 
   Se crea un `ScrollTrigger` cuyo `trigger` será el **Section Wrapper**.
   - `pin: true`: Bloquea verticalmente la pantalla mientras la animación ocurre.
   - `scrub: 1`: Determina si hay inercia suplementaria para ponerse al día con Lenis (1 segundo de suavidad).
   - `start`: 'top top' (Empieza cuando la cabecera de la sección toca el tope de pantalla).
   - `end`: Se establecerá dinámicamente como `() => "+=" + container.offsetWidth` para asegurar un scroll vertical equivalente en longitud al ancho total del contenedor. De esa manera, 1 píxel de movimiento abajo es 1 píxel de movimiento a la izquierda.

2. **La interpolación (Tween):**
   A través del contexto dinámico en React (`useGSAP` o un `useEffect`), se programará el Tween principal:
   ```javascript
   gsap.to(scrollContainer, {
      xPercent: -100 * (cards.length - 1),
      ease: "none",
      scrollTrigger: { ... }
   });
   ```

### Animaciones Internas (Container Animation)
Para darle más dinamismo, a medida que una tarjeta aparece deslizándose, animaremos elementos individuales *dentro* de la tarjeta usando la opción `containerAnimation` de ScrollTrigger. 
- Las imágenes de cover podrán hacer un leve escalado compensatorio.
- Los textos (título, descripción) podrán desvanecerse (fade in/up) según el progreso horizontal.
