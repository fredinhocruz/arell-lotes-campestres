# ARELL V3 — Reglas del proyecto

## Objetivo del proyecto

Reconstruir la arquitectura frontend de ARELL — Lotes Campestres para que sea limpia, modular, mantenible y escalable, manteniendo la apariencia de la versión publicada del sitio.

La versión publicada es la referencia visual oficial. Toda diferencia visual introducida durante una fase debe corregirse antes de avanzar a otra.

## Arquitectura del repositorio

```text
/
├── index.html
├── README.md
├── PROJECT_RULES.md
├── ROADMAP.md
├── CHANGELOG.md
├── css/
│   ├── variables.css
│   ├── main.css
│   ├── header.css
│   ├── hero.css
│   ├── beneficios.css
│   ├── plano.css
│   ├── galeria.css
│   ├── ubicacion.css
│   ├── contacto.css
│   ├── footer.css
│   ├── responsive.css
│   └── animations.css
├── js/
│   ├── main.js
│   ├── menu.js
│   ├── scroll.js
│   └── slider.js
└── img/
    ├── galeria/
    ├── hero/
    ├── logo/
    └── planos/
```

No crear, renombrar ni mover archivos o rutas sin una fase aprobada que lo requiera.

## Organización de carpetas

- `css/`: hojas de estilo con responsabilidades delimitadas por archivo.
- `js/`: comportamiento e inicialización JavaScript.
- `img/`: imágenes utilizadas por el sitio, organizadas por función.
- La raíz contiene la página, documentación y archivos de gestión del proyecto.

## Responsabilidad de cada archivo CSS

- `variables.css`: variables CSS globales únicamente.
- `main.css`: reset, normalize, `html`, `body`, reglas universales, imágenes, enlaces, listas, tipografía global, helpers, contenedores, utilidades y espaciados globales. No incluir estilos específicos de secciones.
- `header.css`: encabezado, navbar, logo, menú, menú móvil, overlay y comportamiento visual sticky del encabezado.
- `hero.css`: sección Hero, overlay, badges, botones y desplazamiento del Hero.
- `beneficios.css`: sección Beneficios únicamente.
- `plano.css`: sección Plano Maestro únicamente.
- `galeria.css`: sección Galería únicamente.
- `ubicacion.css`: sección Ubicación únicamente.
- `contacto.css`: formulario, WhatsApp y CTA pertenecientes a Contacto.
- `footer.css`: pie de página únicamente.
- `responsive.css`: media queries únicamente. No incluir reglas CSS normales fuera de media queries.
- `animations.css`: `@keyframes`, animaciones, transiciones y efectos de movimiento únicamente.

Una regla debe residir en el archivo cuya responsabilidad corresponda al elemento que estiliza. No duplicar reglas entre módulos.

## Responsabilidad de cada archivo JavaScript

- `main.js`: punto de inicialización general y coordinación de módulos cuando sea necesario.
- `menu.js`: comportamiento del menú de navegación.
- `scroll.js`: comportamiento vinculado al desplazamiento de la página.
- `slider.js`: comportamiento del slider o galería deslizante.

Cada archivo debe mantener una responsabilidad única. No retirar ni desactivar funcionalidades existentes sin aprobación explícita y justificación documentada.

## Convenciones HTML

- Mantener la estructura, textos, clases, IDs, rutas y contenido existentes, salvo autorización explícita para cambiarlos.
- Usar HTML semántico y mantener atributos de accesibilidad existentes.
- Los IDs deben ser únicos en el documento.
- Los enlaces que abren pestañas nuevas deben conservar los atributos de seguridad apropiados.
- No introducir cambios de contenido o SEO como parte de una fase CSS o JavaScript.

## Convenciones CSS

- Mantener la apariencia de la versión publicada.
- No cambiar colores, tipografías, tamaños, márgenes, paddings, animaciones u otros valores visuales sin aprobación explícita.
- Mantener cada selector en el módulo que le corresponde.
- Mantener `responsive.css` limitado a media queries.
- Mantener `variables.css` limitado a variables.
- Evitar duplicados; antes de consolidar reglas, comprobar su efecto en la cascada.
- No mover reglas desde archivos legados sin analizar y explicar el impacto.
- No agregar reglas o dependencias externas sin autorización.

## Convenciones JavaScript

- Mantener el comportamiento existente y la compatibilidad con el HTML actual.
- Evitar variables globales, dependencias innecesarias y lógica duplicada.
- Usar nombres descriptivos y verificaciones cuando un módulo dependa de elementos del DOM.
- No activar scripts que actualmente estén inactivos sin analizar su impacto y obtener aprobación.
- No añadir librerías sin una necesidad aprobada.

## Convenciones Git

- Realizar todo desarrollo exclusivamente en la rama `arell-v3`.
- No cambiar de rama ni trabajar en otra rama sin aprobación.
- Conservar el tag `backup-antes-v3` como referencia de respaldo; no modificarlo ni reemplazarlo.
- Mantener cada fase en un commit independiente.
- No hacer commits, merges, tags ni push sin la aprobación correspondiente.
- No incluir en un commit archivos fuera del alcance aprobado.

## Convenciones de ramas

- Rama de desarrollo autorizada: `arell-v3`.
- No crear ni usar ramas de trabajo adicionales sin aprobación.
- No realizar cambios sobre ramas de respaldo o publicación.
- Antes de iniciar una fase, verificar la rama activa y el estado limpio del árbol de trabajo.

## Convenciones de commits

- Un commit debe corresponder a una sola fase y responsabilidad.
- Usar mensajes breves y descriptivos, por ejemplo: `feat(header): modulariza estilos del encabezado`.
- No combinar módulos, fases o cambios de documentación no relacionados en un mismo commit.
- Crear el commit solo después de que el usuario haya revisado y validado los cambios de la fase.

## Flujo de trabajo por fases

1. Analizar el estado actual del módulo y sus dependencias.
2. Explicar los hallazgos, alcance, archivos y riesgos.
3. Presentar el plan y esperar aprobación.
4. Implementar únicamente el alcance aprobado.
5. Antes de guardar, presentar el diff completo, los archivos afectados, el motivo y los riesgos.
6. Después de implementar, informar el resultado y esperar validación.
7. Crear un commit independiente solo después de la validación del usuario.
8. No iniciar la fase siguiente hasta completar la fase actual.

## Reglas para futuras contribuciones

- Leer este documento y `ROADMAP.md` antes de trabajar.
- Confirmar rama y estado de Git antes de cualquier cambio.
- No inferir permiso para una fase a partir de la aprobación de otra.
- No aplicar cambios automáticos ni cambios masivos.
- No incorporar trabajo adicional fuera del alcance aprobado.
- Actualizar `ROADMAP.md` y `CHANGELOG.md` cuando una fase aprobada se complete.
- Mantener los documentos consistentes con el estado real del repositorio.

## Restricciones del proyecto

Sin autorización explícita, no modificar:

- Colores, tipografías, tamaños o espaciados.
- Animaciones o transiciones.
- Textos, imágenes, rutas o contenido.
- Estructura HTML, clases o IDs.
- Funcionalidades JavaScript.
- Información SEO.
- Archivos fuera del alcance de la fase aprobada.

No eliminar código sin justificar su estado, dependencias e impacto. No optimizar prematuramente ni crear deuda técnica para acelerar una fase.

## Checklist antes de cada Commit

- [ ] La fase fue aprobada y está completa.
- [ ] El trabajo corresponde a una sola responsabilidad.
- [ ] La rama activa es `arell-v3`.
- [ ] No hay cambios ajenos al alcance aprobado.
- [ ] El diff fue revisado y validado por el usuario.
- [ ] No hay cambios visuales frente a la referencia publicada.
- [ ] No se alteraron textos, rutas, HTML, clases, IDs ni funcionalidades fuera del alcance.
- [ ] Las verificaciones acordadas para la fase se completaron.
- [ ] `ROADMAP.md` y `CHANGELOG.md` reflejan el estado real cuando corresponda.
- [ ] El mensaje de commit describe claramente la fase.

## Checklist antes de hacer Merge

- [ ] Todas las fases incluidas fueron aprobadas y validadas.
- [ ] Cada fase tiene su commit independiente.
- [ ] La comparación visual contra la versión publicada no muestra diferencias pendientes.
- [ ] Las verificaciones acordadas están completas.
- [ ] No hay cambios fuera del alcance ni archivos inesperados.
- [ ] La documentación está actualizada.
- [ ] El usuario aprobó explícitamente el merge.
