import TaskView from "../../app/views/taskView.js";
import Events from "../../control/events.js";
import UserController from "../../app/controllers/userController.js";

document.addEventListener("DOMContentLoaded", () => {
    const app = document.getElementById("app");

    app.innerHTML = `
        <div class="login-container">
            <h1>Iniciar Sesión</h1>
            <form id="loginForm">
                <input type="text" id="loginUsername" placeholder="Nombre de usuario" required />
                <input type="password" id="loginPassword" placeholder="Contraseña" required />
                <button type="submit">Iniciar Sesión</button>
                <p>¿No tienes una cuenta? <a href="#" id="showRegister">Regístrate</a></p>
            </form>
        </div>
        <div class="register-container" style="display: none;">
            <h1>Registro</h1>
            <form id="registerForm">
                <input type="text" id="registerUsername" placeholder="Nombre de usuario" required />
                <input type="password" id="registerPassword" placeholder="Contraseña" required />
                <button type="submit">Registrarse</button>
                <p>¿Ya tienes una cuenta? <a href="#" id="showLogin">Inicia Sesión</a></p>
            </form>
        </div>
        <div class="container" style="display: none;">
            <button id="logoutButton">Cerrar Sesión</button>
            <h1 id="todoTitle">📌 To-Do List</h1>
            <form id="taskForm">
                <input type="text" id="taskInput" placeholder="Crtl + B para escribir..." required />
                <button type="submit">➕ Agregar</button>
            </form>
            <div id="taskLists">
                <div class="list-container">
                    <h3>Pendientes</h3>
                    <ul id="taskListPending"></ul>
                </div>
                <div class="list-container">
                    <h3>En Curso</h3>
                    <ul id="taskListInProgress"></ul>
                </div>
                <div class="list-container">
                    <h3>Completadas</h3>
                    <ul id="taskListCompleted"></ul>
                </div>
            </div>
        </div>
    `;

    document.getElementById("showRegister").addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector(".login-container").style.display = "none";
        document.querySelector(".register-container").style.display = "block";
    });

    document.getElementById("showLogin").addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector(".register-container").style.display = "none";
        document.querySelector(".login-container").style.display = "block";
    });

    document.getElementById("loginForm").addEventListener("submit", (e) => {
        e.preventDefault();
        const username = document.getElementById("loginUsername").value.trim();
        const password = document.getElementById("loginPassword").value.trim();
        if (UserController.login(username, password)) {
            document.querySelector(".login-container").style.display = "none";
            document.querySelector(".container").style.display = "block";
            document.getElementById("todoTitle").textContent = `📌 To-Do List de ${username}`;
            TaskView.renderTasks();
            Events.setup();
        } else {
            alert("Nombre de usuario o contraseña incorrectos");
        }
    });

    document.getElementById("registerForm").addEventListener("submit", (e) => {
        e.preventDefault();
        const username = document.getElementById("registerUsername").value.trim();
        const password = document.getElementById("registerPassword").value.trim();
        if (UserController.register(username, password)) {
            alert("Usuario registrado con éxito");
            document.querySelector(".register-container").style.display = "none";
            document.querySelector(".login-container").style.display = "block";
        } else {
            alert("El nombre de usuario ya existe");
        }
    });

    document.getElementById("logoutButton").addEventListener("click", () => {
        UserController.logout();
        document.querySelector(".container").style.display = "none";
        document.querySelector(".login-container").style.display = "block";
    });

    // Add keyboard shortcut for focusing on the task input field
    document.addEventListener("keydown", (e) => {
        if (e.ctrlKey && e.key === "b") {
            e.preventDefault();
            document.getElementById("taskInput").focus();
        }
    });
});
