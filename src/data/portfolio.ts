export const proyectosPrincipales = [
  {
    titulo: "StellarMinds",
    subtitulo: "Plataforma de Gestión Astronómica & AI-Assisted Assessment",
    descripcion: "Sistema web con arquitectura distribuida en capas, autenticación segura JWT, persistencia relacional con SQL Server / EF Core, contenedorizado en Docker y desplegado en la nube. Integra la API de Google Gemini para la evaluación automatizada de equipamiento astronómico.",
    tags: [
      { nombre: ".NET 10", color: "bg-purple-950/60 text-purple-300 border-purple-800/60" },
      { nombre: "C#", color: "bg-emerald-950/60 text-emerald-300 border-emerald-800/60" },
      { nombre: "Web API REST", color: "bg-blue-950/60 text-blue-300 border-blue-800/60" },
      { nombre: "EF Core / SQL", color: "bg-cyan-950/60 text-cyan-300 border-cyan-800/60" },
      { nombre: "Docker", color: "bg-sky-950/60 text-sky-300 border-sky-800/60" },
      { nombre: "Gemini API", color: "bg-amber-950/60 text-amber-300 border-amber-800/60" },
    ],
    linkGithub: "https://github.com/facumesa/api-rest-cliente-csharp",
    linkDemo: "https://stellarminds-web.onrender.com",
    destacado: true,
    notaDiseno: "La interfaz visual fue estructurada y diseñada con asistencia de IA para presentar y publicar el sistema de forma más cuidada, evitando formularios por defecto o nombres internos de clases. Esta asistencia se limitó al diseño; algunas funcionalidades todavía conservan su presentación original.",
    capturas: [
      { src: "/img/stellarminds/pagina-principal.png", alt: "Página pública de bienvenida de StellarMinds", title: "Presentación del sistema", description: "La portada resume los tres ejes de la plataforma: observaciones astronómicas, evaluación de equipamiento con Gemini y administración de préstamos." },
      { src: "/img/stellarminds/login.png", alt: "Pantalla de acceso para usuarios registrados en StellarMinds", title: "Acceso seguro", description: "Punto de entrada para usuarios registrados, conectado al sistema de autenticación y autorización de la aplicación." },
      { src: "/img/stellarminds/creacion-observacion.png", alt: "Flujo guiado para registrar una observación astronómica", title: "Planificación de observaciones", description: "Flujo que relaciona una fecha, un préstamo vigente y un objeto celeste antes de solicitar a Gemini la evaluación del equipo seleccionado." },
      { src: "/img/stellarminds/equipos-en-stock.png", alt: "Inventario y disponibilidad de equipos astronómicos", title: "Control de inventario", description: "Vista administrativa para consultar existencias y gestionar telescopios, monturas, cámaras y oculares desde un inventario centralizado." },
    ],
  },
  {
    titulo: "Sistema de Gestión de Vuelos",
    subtitulo: "Algoritmos & Tipos de Datos Abstractos de Bajo Nivel",
    descripcion: "Construcción completa desde cero de estructuras de datos dinámicas (Listas Enlazadas, Pilas y Colas) sin utilizar librerías nativas de Java. Implementa inserciones ordenadas, gestión de ciclos de vida de vuelo y validación de documentos mediante Expresiones Regulares.",
    tags: [
      { nombre: "Java", color: "bg-orange-950/60 text-orange-300 border-orange-800/60" },
      { nombre: "TADs a Mano", color: "bg-teal-950/60 text-teal-300 border-teal-800/60" },
      { nombre: "Algoritmos O(n)", color: "bg-indigo-950/60 text-indigo-300 border-indigo-800/60" },
      { nombre: "RegEx", color: "bg-rose-950/60 text-rose-300 border-rose-800/60" },
    ],
    linkGithub: "https://github.com/facumesa/javatads",
    destacado: false,
    flujo: ["Validar documento", "Registrar vuelo", "Ordenar información", "Gestionar ciclo de vida"],
  },
];

export const proyectosIA = [{
  titulo: "Proyecto DT (nombre por definir)",
  subtitulo: "Proyecto personal desarrollado con IA",
  descripcion: "Experimento personal de un modo carrera de director técnico para navegador, creado mediante prompts y asistencia intensiva de IA. Mi participación se centra en la idea, la dirección del producto, la definición de funcionalidades y las pruebas; el proyecto utiliza tecnologías y soluciones cuyo funcionamiento todavía estoy aprendiendo.",
  tags: [
    { nombre: "React 19", color: "bg-cyan-950/60 text-cyan-300 border-cyan-800/60" },
    { nombre: "TypeScript", color: "bg-blue-950/60 text-blue-300 border-blue-800/60" },
    { nombre: "Vite", color: "bg-violet-950/60 text-violet-300 border-violet-800/60" },
    { nombre: "PixiJS", color: "bg-pink-950/60 text-pink-300 border-pink-800/60" },
    { nombre: "SQLite", color: "bg-emerald-950/60 text-emerald-300 border-emerald-800/60" },
  ],
  linkShowcase: "/proyectos/proyecto-dt",
}];

export const habilidades = [
  { categoria: "Backend & Lenguajes", items: [".NET 10", "C#", "Java", "PHP / Laravel", "JavaScript"] },
  { categoria: "Bases de Datos & Infra", items: ["SQL Server", "Entity Framework", "Docker", "REST APIs", "Git / GitHub"] },
  { categoria: "Frontend & Tooling", items: ["Tailwind CSS", "Astro", "Vercel", "Render", "Postman / Swagger"] },
];
