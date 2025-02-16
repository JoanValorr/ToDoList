// Importamos el módulo Storage para poder obtener las tareas almacenadas
import Storage from "../../control/storage.js";

class TaskView {
    // Método estático que se encarga de renderizar todas las tareas en la vista
    static renderTasks() {
        // Obtenemos todas las tareas almacenadas a través de Storage
        const tasks = Storage.getTasks();

        // Limpiamos el contenido de las listas de tareas (pendientes, en progreso, y completadas) antes de agregar nuevas
        document.getElementById("taskListPending").innerHTML = "";
        document.getElementById("taskListInProgress").innerHTML = "";
        document.getElementById("taskListCompleted").innerHTML = "";

        // Iteramos sobre todas las tareas y creamos los elementos de la interfaz
        tasks.forEach(task => {
            // Creamos un nuevo elemento <li> para representar la tarea
            const li = document.createElement("li");
            li.classList.add("taskItem");  // Añadimos la clase `taskItem` para el estilo de las tareas
            li.dataset.id = task.id;       // Asignamos el ID de la tarea al atributo `data-id` del <li>

            // Si la tarea está completada, le añadimos una clase `completed` para mostrarla de manera diferente
            const taskText = task.status === "completed" ? 
                `<span class="completed">${task.text}</span>` : 
                `<span>${task.text}</span>`;

            // Definimos el HTML que tendrá cada tarea, con un botón de mover y de eliminar
            li.innerHTML = `
                ${taskText}
                <div>
                    ${task.status !== "completed" ? `<button class="move">➡️</button>` : ""}
                    <button class="delete">❌</button>
                </div>
            `;

            // Dependiendo del estado de la tarea, la agregamos a la lista correspondiente
            if (task.status === "pending") {
                document.getElementById("taskListPending").appendChild(li);
            } else if (task.status === "inProgress") {
                document.getElementById("taskListInProgress").appendChild(li);
            } else {
                document.getElementById("taskListCompleted").appendChild(li);
            }
        });
    }
}

// Exportamos la vista para que pueda ser usada en otras partes de la aplicación
export default TaskView;
