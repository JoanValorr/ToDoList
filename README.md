# Gestor de Tareas (To-Do List Mejorado)

Este es un gestor de tareas basado en SPA (Single Page Application) con autenticación y almacenamiento en base de datos.

## 📌 Funcionalidades
- Crear, editar, completar y eliminar tareas.
- Validación en el formulario de tareas (mínimo 3 caracteres, no vacío).
- Modificación de atributos HTML (`class`, `disabled`, `title`, `data-id`).
- Múltiples eventos: `click`, `submit`, `input`, `dblclick`.
- Login con PHP y sesiones para guardar tareas por usuario.
- Arquitectura **MVC** con separación de lógica, vistas y modelos.

## 📂 Estructura del Proyecto
- `/public/` → Contiene el frontend (`index.html`, CSS, JS).
- `/src/` → Backend en PHP (`models`, `controllers`, `config`).
- `/docs/` → Documentación y explicación del proyecto.

## ⚙️ Instalación
1. Clonar el repositorio:
   ```sh
   git clone https://github.com/tu-usuario/gestor-tareas.git
