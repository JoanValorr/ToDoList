import UserController from "../app/controllers/userController.js";

// Clase Storage que maneja el almacenamiento de tareas en el LocalStorage
class Storage {
    // Método estático para obtener las tareas almacenadas en el LocalStorage
    static getTasks() {
        const currentUser = UserController.getCurrentUser();
        // Intentamos obtener las tareas desde el LocalStorage.
        // Si no existe ninguna tarea guardada, devolvemos un arreglo vacío.
        return JSON.parse(localStorage.getItem(`tasks_${currentUser}`)) || [];
    }

    // Método estático para guardar las tareas en el LocalStorage
    static saveTasks(tasks) {
        const currentUser = UserController.getCurrentUser();
        // Convertimos el arreglo de tareas a un string JSON y lo guardamos en el LocalStorage
        localStorage.setItem(`tasks_${currentUser}`, JSON.stringify(tasks));
    }
}

// Exportamos la clase Storage para que pueda ser utilizada en otras partes de la aplicación
export default Storage;
