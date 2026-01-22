# Portafolio Web - Terminal Hacker Style

Un portafolio web interactivo que simula una terminal de hacker, construido con React, Vite y Tailwind CSS.

## 🚀 Características

- ✨ Interfaz de terminal interactiva
- 🎨 Diseño minimalista estilo hacker (fondo negro, texto verde)
- ⚡ Comandos interactivos personalizados
- 📱 Diseño responsive
- ♿ Accesibilidad básica implementada
- 🔄 Historial de comandos navegable con flechas

## 🛠️ Tecnologías

- **React 18** - Biblioteca de UI
- **Vite** - Build tool y dev server
- **Tailwind CSS** - Framework de CSS utility-first
- **JavaScript ES6+** - Lenguaje de programación

## 📋 Comandos Disponibles

| Comando | Descripción |
|---------|-------------|
| `help` | Muestra la lista de comandos disponibles |
| `about` | Información sobre el desarrollador |
| `projects` | Lista de proyectos destacados con enlaces |
| `skills` | Habilidades y tecnologías |
| `cv` | Descarga el currículum vitae |
| `contact` | Información de contacto |
| `clear` | Limpia la pantalla de la terminal |

## 🚀 Instalación y Uso

### Prerrequisitos

- Node.js (versión 16 o superior)
- npm o yarn

### Instalación

1. Clona este repositorio o navega al directorio del proyecto

2. Instala las dependencias:
```bash
npm install
```

### Desarrollo

Para iniciar el servidor de desarrollo:
```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

### Build de Producción

Para crear una versión optimizada para producción:
```bash
npm run build
```

Los archivos generados estarán en el directorio `dist/`

### Preview de Producción

Para previsualizar el build de producción localmente:
```bash
npm run preview
```

## 📁 Estructura del Proyecto

```
portafolio_web/
├── public/              # Archivos públicos estáticos
├── src/
│   ├── App.jsx         # Componente principal
│   ├── Terminal.jsx    # Componente de la terminal
│   ├── commands.js     # Definición de comandos
│   ├── main.jsx        # Punto de entrada
│   └── index.css       # Estilos globales con Tailwind
├── index.html          # HTML principal
├── package.json        # Dependencias y scripts
├── vite.config.js      # Configuración de Vite
├── tailwind.config.js  # Configuración de Tailwind
└── postcss.config.js   # Configuración de PostCSS
```

## 🎨 Personalización

### Modificar Comandos

Edita el archivo `src/commands.js` para personalizar la información mostrada en cada comando:

- Actualiza tu información personal en `about`
- Añade tus proyectos en `projects`
- Actualiza tus habilidades en `skills`
- Modifica los enlaces de contacto en `contact`
- Cambia el enlace de tu CV en `cv`

### Colores y Estilos

Los colores de la terminal están definidos en `tailwind.config.js`:

```javascript
colors: {
  terminal: {
    bg: '#000000',    // Fondo negro
    text: '#00ff00',  // Texto verde
    cursor: '#00ff00', // Cursor verde
  }
}
```

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Si encuentras algún bug o tienes alguna sugerencia, no dudes en abrir un issue o pull request.

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

## 👤 Autor

**[Tu Nombre]**
- GitHub: [@tu-usuario](https://github.com/tu-usuario)
- LinkedIn: [tu-perfil](https://linkedin.com/in/tu-perfil)
- Email: tu.email@ejemplo.com

---

⭐ Si te gusta este proyecto, ¡dale una estrella en GitHub!
