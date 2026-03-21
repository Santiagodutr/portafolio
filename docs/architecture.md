# Architecture

## Integración Global (App.jsx)

La arquitectura de la aplicación debe ser envuelta por el proveedor de Lenis para que todo el contexto de scroll sea interceptado de manera uniforme. 

Se implementará el siguiente flujo en la raíz de la aplicación o en un layout global (`App.jsx` o un `SmoothScrollProvider` dedicado):

1. Envío inicial de `<ReactLenis root options={{ smoothContext: true }}>` alrededor de todos los componentes principales (Navbar, Hero, About, Projects, Experience, Footer).
2. En un `useEffect` de más alto nivel, se sincronizará el `ticker` de GSAP para que actualice los valores del RAF (Request Animation Frame) administrados por Lenis.

### Diagrama de Datos y Control

```text
[Input del Usuario: Scroll Wheel/Trackpad]
           |
           v
[Lenis Scroll Manager] <--- Calcula la inercia instantánea y suavidad
           |
           v
[GSAP Ticker (lagSmoothing: 0)] <--- Suscrito a Lenis para actualizar frames de animación
           |
           v
[GSAP ScrollTrigger] <--- Reacciona a la posición calculada
           |
           v
[Componente React (Proyectos / Experiencia)] <--- Recibe la interpolación `xPercent`
```

Al utilizar esta arquitectura mantenemos la responsividad nativa y desvinculamos la carga pesada de cálculo de la vista de React. Todas las animaciones delegan en las transformaciones CSS (`transform: translateX`) a través de la capa de GSAP.
