# Portfolio de Facundo Mesa

Portfolio personal para presentar mi perfil como desarrollador backend, experiencia, formación y proyectos. Está construido con Astro y Tailwind CSS, con una interfaz responsive, temas claro y oscuro, y animaciones activadas durante el recorrido.

## Sitio publicado

El portfolio está disponible en Vercel:

**[facumesadev-azure.vercel.app](https://facumesadev-azure.vercel.app/)**

## Contenido

- Perfil profesional, experiencia y formación.
- Proyectos técnicos destacados.
- Sección diferenciada para proyectos personales creados con asistencia intensiva de IA.
- Capturas navegables y ampliables de StellarMinds.
- Caso de estudio de Proyecto DT, cuyo repositorio permanece privado.
- Tecnologías, enlaces profesionales y medios de contacto.
- Selector de tema claro y oscuro con preferencia persistente.
- Animaciones de entrada que construyen títulos, líneas y secciones durante el desplazamiento.

## Proyectos presentados

### StellarMinds

Sistema de gestión astronómica desarrollado con .NET, C#, Entity Framework Core, SQL Server y Docker. Incluye autenticación JWT e integración con Google Gemini para evaluar combinaciones de equipamiento.

La estructura y el diseño visual de su interfaz fueron realizados con asistencia de IA para preparar una presentación más cuidada. Esta asistencia se limitó al aspecto visual y se declara expresamente dentro del portfolio.

### Sistema de Gestión de Vuelos

Proyecto en Java centrado en algoritmos y tipos de datos abstractos implementados desde cero: listas enlazadas, pilas, colas, inserciones ordenadas y validaciones con expresiones regulares.

### Proyecto DT (nombre por definir)

Experimento personal de un modo carrera de director técnico para navegador, creado mediante prompts y asistencia intensiva de IA. El portfolio incluye un caso de estudio que explica el alcance, mi participación y las razones por las que su repositorio se mantiene privado.

## Tecnologías del portfolio

- [Astro](https://astro.build/)
- [Tailwind CSS](https://tailwindcss.com/)
- TypeScript para comprobar componentes y scripts
- Intersection Observer para las animaciones activadas durante el desplazamiento

## Estructura

```text
portfolio/
├── public/
│   ├── img/                  capturas de los proyectos
│   └── favicon.*
├── src/
│   ├── components/           componentes reutilizables
│   ├── data/                 contenido estructurado
│   ├── pages/
│   │   ├── index.astro
│   │   └── proyectos/
│   │       └── proyecto-dt.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
└── package.json
```

## Rutas

- `/`: portfolio principal.
- `/proyectos/proyecto-dt`: caso de estudio de Proyecto DT.

## Autor

**Facundo Mesa** — Montevideo, Uruguay

- [GitHub](https://github.com/facumesa)
- [LinkedIn](https://www.linkedin.com/in/facundomesati/)
- [facundomesababon@gmail.com](mailto:facundomesababon@gmail.com)
