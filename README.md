📌 To-Do List SPA

📖 Descripción

Este proyecto es una Single Page Application (SPA) que permite gestionar una lista de tareas con funcionalidades de login, creación, edición, eliminación y marcado de tareas como completadas. Se basa en el patrón MVC y usa LocalStorage para persistencia.

📂 Estructura del Proyecto

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

🚀 Funcionalidades

Autenticación básica (login con usuario y contraseña, sin backend, usando LocalStorage).

Gestión de tareas: crear, editar, eliminar y marcar como completadas.

Validaciones en formularios para login y creación de tareas.

SPA dinámica generando contenido desde JavaScript.

Uso de eventos múltiples (click, submit, input, dblclick, etc.).

Modificación de atributos HTML para mejorar la experiencia de usuario.

🛠 Tecnologías

HTML5, CSS3, JavaScript (ES6)

LocalStorage para persistencia de datos

Patrón MVC para organizar la lógica de la aplicación

📌 Instalación y Uso

Clona el repositorio:

git clone https://github.com/tu-repo/todolist-spa.git

Abre index.html en tu navegador.

Usa la app para gestionar tus tareas.

📜 Licencia

Proyecto de código abierto bajo la licencia MIT. 🚀
