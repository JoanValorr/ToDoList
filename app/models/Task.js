// Definimos la clase Task que representará a una tarea
class Task {
    // El constructor recibe tres parámetros: id, text (texto de la tarea) y status (que por defecto es "pending")
    constructor(id, text, status = "pending") {
        this.id = id;      // El ID único de la tarea (puede ser un timestamp o cualquier valor único)
        this.text = text;  // El texto que describe la tarea
        this.status = status;  // El estado de la tarea, que por defecto es "pending" (pendiente)
    }
}

// Exportamos la clase Task para que pueda ser utilizada en otras partes de la aplicación
export default Task;
