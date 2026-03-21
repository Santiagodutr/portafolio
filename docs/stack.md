# Tech Stack

## Referencias Principales
- **Framework**: React 19 (via Vite)
- **Animaciones**: GSAP (`gsap` v3.14+ y `@gsap/react`)
- **Smooth Scrolling**: Lenis (`lenis` v1.3+)

## Justificación del Stack para la Interactividad
Para lograr el efecto inmersivo y responsivo que se espera de las secciones de "Proyectos" y "Experiencia", la combinación de **GSAP ScrollTrigger** y **Lenis** es ideal. 

1. **Lenis**: Se encarga de interceptar el scroll nativo del ratón o trackpad, aplicando una interpolación matemática para suavizar el desplazamiento global de la página. Es extremadamente ligero y funciona secuestrando el requestAnimationFrame (raf).
2. **GSAP ScrollTrigger**: Al conectar el `updater` de Lenis con el `ticker` interno de GSAP, ScrollTrigger puede leer los valores de scroll subpixel precisos que genera Lenis, en lugar del scroll irregular del navegador.

Esta dupla permite que la línea de tiempo horizontal (animada por GSAP mediante traslación sobre el eje X) responda con una inercia perfecta a los movimientos físicos del usuario.
