// Importamos el TaskController para poder usar sus métodos en este archivo
import TaskController from "../app/controllers/taskController.js";

class Events {
    // Método estático que configura los eventos de la aplicación
    static setup() {
        const taskForm = document.getElementById("taskForm");
        const taskInput = document.getElementById("taskInput");

        // Configuramos el evento de submit en el formulario de creación de tareas
        taskForm.addEventListener("submit", (e) => {
            e.preventDefault();  // Prevenimos que el formulario recargue la página al enviarlo
            if (!taskInput.value.trim()) {
                taskInput.classList.add("error");
                taskInput.placeholder = "Crtl + B para escribir...";
                return;
            }
            taskInput.classList.remove("error");
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

            // Si el botón clickeado tiene la clase "delete", eliminamos la tarea
            if (e.target.classList.contains("delete")) {
                TaskController.deleteTask(taskId);  // Llamamos a deleteTask para eliminar la tarea
            } else if (e.target.classList.contains("move")) {
                TaskController.moveTask(taskId);
            }
        });

        taskInput.addEventListener("focus", () => {
            taskInput.classList.remove("error");
            taskInput.placeholder = "Escribe una nueva tarea...";
        });

        taskInput.addEventListener("input", () => {
            if (taskInput.value.trim()) {
                taskInput.classList.remove("error");
                taskInput.placeholder = "Crtl + B para escribir...";
            }
        });
    }
}
// Exportamos la clase Events para que pueda ser usada en otros archivos
export default Events;
