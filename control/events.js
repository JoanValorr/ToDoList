// Importamos el TaskController para poder usar sus métodos en este archivo
import TaskController from "../app/controllers/taskController.js";

class Events {
    // Método estático que configura los eventos de la aplicación
    static setup() {
        // Configuramos el evento de submit en el formulario de creación de tareas
        document.getElementById("taskForm").addEventListener("submit", (e) => {
            e.preventDefault();  // Prevenimos que el formulario recargue la página al enviarlo
            const taskInput = document.getElementById("taskInput");  // Obtenemos el campo de texto del formulario
            TaskController.addTask(taskInput.value);  // Llamamos al método addTask de TaskController para agregar la tarea
            taskInput.value = "";  // Limpiamos el campo de texto del formulario
        });

        // Delegamos los eventos en el contenedor de las listas de tareas (taskLists)
        document.getElementById("taskLists").addEventListener("click", (e) => {
            // Buscamos el <li> padre del elemento que fue clickeado
            const taskElement = e.target.closest(".taskItem");

            // Si no se hace clic en un <li> o si el clic no fue en una tarea, salimos
            if (!taskElement) return;

            // Obtenemos el ID de la tarea desde el atributo `data-id` del <li>
            const taskId = parseInt(taskElement.dataset.id);

            // Si el botón clickeado tiene la clase "move", movemos la tarea a otro estado
            if (e.target.classList.contains("move")) {
                TaskController.moveTask(taskId);  // Llamamos a moveTask para cambiar el estado de la tarea
            }

            // Si el botón clickeado tiene la clase "delete", eliminamos la tarea
            if (e.target.classList.contains("delete")) {
                TaskController.deleteTask(taskId);  // Llamamos a deleteTask para eliminar la tarea
            }
        });
    }
}

// Exportamos la clase Events para que pueda ser usada en otros archivos
export default Events;
