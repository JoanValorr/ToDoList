// Importamos la vista de las tareas y los eventos de la aplicación
import TaskView from "../../app/views/taskView.js";
import Events from "../../control/events.js";

// Esperamos a que el documento HTML se haya cargado completamente
document.addEventListener("DOMContentLoaded", () => {
    // Llamamos al método estático renderTasks() de TaskView para renderizar las tareas en la interfaz
    TaskView.renderTasks();

    // Configuramos los eventos de la aplicación usando el método estático setup() de Events
    Events.setup();
});
