# To-Do List SPA

## Descripción

Este proyecto es una **Single Page Application (SPA)** que permite gestionar una lista de tareas. Ofrece funcionalidades como login de usuario, creación, edición, eliminación y marcado de tareas como completadas. La aplicación está basada en el patrón **MVC (Modelo-Vista-Controlador)** y utiliza **LocalStorage** para la persistencia de datos.

## Estructura del Proyecto

La estructura del proyecto sigue una organización clara para separar la lógica de la aplicación, las vistas y el manejo de eventos.

📂 TODOLIST/
│── index.html        # Archivo principal de la SPA
│── 📁 app/           # Lógica de la aplicación (MVC)
│   ├── 📁 models/         # Definición de estructuras de datos
│   │   ├── user.js        # Modelo de usuario
│   │   ├── task.js        # Modelo de tarea
│   ├── 📁 views/          # Generación de interfaz de usuario
│   │   ├── loginView.js   # Vista de login
│   │   ├── taskView.js    # Vista de tareas
│   ├── 📁 controllers/    # Controladores de la lógica de la app
│   │   ├── authController.js  # Controlador de autenticación
│   │   ├── taskController.js  # Controlador de tareas
│── 📁 control/        # Manejo de eventos y almacenamiento
│   ├── storage.js    # Manejo de LocalStorage
│   ├── events.js     # Eventos y validaciones
│── 📁 public/         # Recursos estáticos
│   ├── 📁 css/        # Estilos generales
│   │   ├── styles.css # Estilos globales
│   │   ├── login.css  # Estilos específicos para login (opcional)
│   │   ├── tasks.css  # Estilos específicos para tareas (opcional)
│   ├── 📁 js/         # Scripts generales
│   │   ├── app.js        # Punto de entrada de la aplicación
│   │   ├── ui.js         # Funciones auxiliares para la UI
│   │   ├── validation.js # Funciones de validación de formularios
│   │   ├── helpers.js    # Utilidades generales
│── README.md         # Documentación del proyecto


## Funcionalidades

### Autenticación

- Login con usuario y contraseña (sin backend, utilizando **LocalStorage** para persistencia).
- Validación de credenciales y almacenamiento de sesión en **LocalStorage**.

### Gestión de Tareas

- **Crear tareas**: El usuario puede añadir nuevas tareas.
- **Editar tareas**: Permite modificar una tarea existente.
- **Eliminar tareas**: Permite eliminar tareas de la lista.
- **Marcar tareas como completadas**: Se pueden marcar tareas como completadas y viceversa.

### Interactividad

- **Validaciones**: Formularios de login y creación de tareas con validaciones.
- **Eventos**: Manejo de múltiples eventos como `click`, `submit`, `input`, `dblclick`, etc.
- **Modificación de la interfaz**: Modificación dinámica de los atributos HTML para mejorar la experiencia del usuario.
- **SPA**: La interfaz se genera dinámicamente a través de JavaScript sin necesidad de recargar la página.

## Tecnologías

- **HTML5** para la estructura de la aplicación.
- **CSS3** para los estilos.
- **JavaScript (ES6)** para la lógica y funcionalidad de la aplicación.
- **LocalStorage** para la persistencia de los datos (sin backend).
- **MVC (Modelo-Vista-Controlador)** para organizar la aplicación.

## Instalación y Uso

### Clonar el repositorio

```bash
git clone https://github.com/tu-repo/todolist-spa.git
