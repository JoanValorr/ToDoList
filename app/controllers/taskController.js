import Storage from "../../control/storage.js";
import Task from "../models/Task.js";
import TaskView from "../views/taskView.js";

class TaskController {
    // Método estático para agregar una nueva tarea
    static addTask(text) {
        // Si el texto está vacío o solo tiene espacios en blanco, no hacemos nada
        if (!text.trim()) return;

        // Recuperamos la lista actual de tareas desde el almacenamiento
        const tasks = Storage.getTasks();

        // Creamos una nueva tarea con un ID único (timestamp) y el texto proporcionado
        const newTask = new Task(Date.now(), text);

        // Añadimos la nueva tarea a la lista de tareas
        tasks.push(newTask);

        // Guardamos la lista actualizada de tareas en el almacenamiento
        Storage.saveTasks(tasks);

        // Volvemos a renderizar las tareas para que la vista se actualice
        TaskView.renderTasks();
    }

    // Método estático para eliminar una tarea
    static deleteTask(id) {
        // Filtramos las tareas, eliminando la que tenga el ID proporcionado
        let tasks = Storage.getTasks().filter(task => task.id !== id);

        // Guardamos la lista de tareas actualizada (sin la tarea eliminada)
        Storage.saveTasks(tasks);

        // Volvemos a renderizar las tareas para actualizar la vista
        TaskView.renderTasks();
    }

    // Método estático para mover el estado de una tarea
    static moveTask(id) {
        // Mapeamos las tareas, buscando la tarea con el ID proporcionado
        let tasks = Storage.getTasks().map(task => {
            // Si encontramos la tarea, actualizamos su estado según el siguiente estado
            if (task.id === id) {
                if (task.status === "pending") {
                    task.status = "inProgress";  // Si está pendiente, la movemos a "en curso"
                } else if (task.status === "inProgress") {
                    task.status = "completed";  // Si está en curso, la movemos a "completada"
                }
            }
            return task; // Retornamos la tarea actualizada (o sin cambios si no era la que buscamos)
        });

        // Guardamos la lista de tareas actualizada (con el estado cambiado de la tarea)
        Storage.saveTasks(tasks);

        // Volvemos a renderizar las tareas para actualizar la vista
        TaskView.renderTasks();
    }
}

// Exportamos el TaskController para que pueda ser usado en otros archivos
export default TaskController;
