// commands.js - Mapeo de comandos a sus funciones y salidas

export const commands = {
  help: () => {
    return `
╔════════════════════════════════════════════════════════════════╗
║                    COMANDOS DISPONIBLES                        ║
╚════════════════════════════════════════════════════════════════╝

  help            - Muestra esta lista de comandos
  about           - Muestra información sobre mí
  projects        - Lista mis proyectos destacados
  skills          - Muestra mis habilidades técnicas
  cv              - Descarga mi CV
  certificaciones - Abre mis certificaciones
  contact         - Muestra información de contacto
  clear           - Limpia la pantalla

Escribe un comando y presiona Enter para ejecutarlo.
    `.trim();
  },

  about: () => {
    return `
╔════════════════════════════════════════════════════════════════╗
║                      SOBRE MÍ                                  ║
╚════════════════════════════════════════════════════════════════╝

Nombre: Faviana Michelle Sanchez Cavieres
Rol: Desarrollador Full Stack

Apasionada por transformar ideas en soluciones 
tecnológicas eficientes e innovadoras, con un enfoque en código limpio, escalable y mantenible.

Experiencia:
  • 4 años desarrollando soluciones tecnológicas.
  • Experiencia en arquitectura de software y diseño de sistemas.
  • Colaboración efectiva en equipos multidisciplinarios bajo metodologías ágiles (Scrum).
  • Especializada en desarrollo frontend y backend, integración de APIs y automatización de procesos.

Filosofía: "Código limpio, soluciones elegantes"
    `.trim();
  },

  projects: () => {
    return `
╔════════════════════════════════════════════════════════════════╗
║                   MIS PROYECTOS                                ║
╚════════════════════════════════════════════════════════════════╝

Algunos de mis proyectos destacados son:


1. Desarrollo Portal Autoconsulta Datos Electorales, Servel
    < https://consulta.servel.cl/ >

2. Sistema Plataforma de Cobranza Judicial
   Clientes como Bci, Bsecurity, Binternacional, Bchile.
    < https://bci.plataformajudicial.cl/plataformajudicial/plataformajudicial_web/home.aspx >


    `.trim();
  },

  skills: () => {
    return `
╔════════════════════════════════════════════════════════════════╗
║                   HABILIDADES TÉCNICAS                         ║
╚════════════════════════════════════════════════════════════════╝

Frontend:

React.js / Next.js

React Native

Angular

Tailwind CSS / CSS3

Vite / Webpack

JavaScript / TypeScript

Backend:

Node.js / Express.js

Python / Django / Automatización de procesos

Java / Spring 

.Net Core C#

RESTful APIs

JWT / OAuth / Sistemas de autenticación

Bases de Datos:

MongoDB

PostgreSQL

Redis

Procesamiento de datos / ETL / Data Warehousing / Big Data 

Herramientas:

Git / GitHub

Docker

AWS / Vercel

Postman

Jest / Testing Library

Otros:

Metodologías ágiles (Scrum)

Documentación técnica

Trabajo en equipo

Resolución de problemas
    `.trim();
  },

  cv: () => {
    // Abre el CV en una nueva pestaña
    window.open('https://drive.google.com/file/d/18NLbdGqzdrXNgakRj6FVBkEjxvISQ_AX/view?usp=drive_link', '_blank');
    return `
╔════════════════════════════════════════════════════════════════╗
║                      DESCARGAR CV                              ║
╚════════════════════════════════════════════════════════════════╝

Abriendo CV en una nueva pestaña...

Si no se abrió automáticamente, usa este enlace:
-> https://drive.google.com/file/d/18NLbdGqzdrXNgakRj6FVBkEjxvISQ_AX/view?usp=drive_link
    `.trim();
  },

  certificaciones: () => {
    // Abre las certificaciones en una nueva pestaña
    window.open('https://drive.google.com/drive/folders/1EqQlhy56p6ELMyQfyUPuw2KcFFhq6mdZ?usp=drive_link', '_blank');
    return `
╔════════════════════════════════════════════════════════════════╗
║                    CERTIFICACIONES                             ║
╚════════════════════════════════════════════════════════════════╝

Abriendo certificaciones en una nueva pestaña...

Si no se abrió automáticamente, usa este enlace:
->5 https://drive.google.com/drive/folders/1EqQlhy56p6ELMyQfyUPuw2KcFFhq6mdZ?usp=drive_link
    `.trim();
  },

  contact: () => {
    return `
╔════════════════════════════════════════════════════════════════╗
║                      CONTACTO                                  ║
╚════════════════════════════════════════════════════════════════╝

Email: sfaviana29@gmail.com
LinkedIn: https://www.linkedin.com/in/favianasanchezc/


¡No dudes en contactarme! Estoy abierto a nuevas oportunidades
y colaboraciones interesantes.
    `.trim();
  },

  clear: () => {
    return 'CLEAR_COMMAND'; // Señal especial para limpiar la pantalla
  },

  // Comando desconocido
  unknown: (cmd) => {
    return `
Comando no reconocido: '${cmd}'

Escribe 'help' para ver la lista de comandos disponibles.
    `.trim();
  }
};

// Función para ejecutar un comando
export const executeCommand = (input) => {
  const cmd = input.trim().toLowerCase();
  
  if (cmd === '') {
    return '';
  }
  
  if (commands[cmd]) {
    return commands[cmd]();
  }
  
  return commands.unknown(input.trim());
};
