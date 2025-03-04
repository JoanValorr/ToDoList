class UserController {
    static register(username, password) {
        const users = JSON.parse(localStorage.getItem("users")) || {};
        if (users[username]) {
            return false; // Username already exists
        }
        users[username] = password;
        localStorage.setItem("users", JSON.stringify(users));
        return true;
    }

    static login(username, password) {
        const users = JSON.parse(localStorage.getItem("users")) || {};
        if (users[username] && users[username] === password) {
            localStorage.setItem("currentUser", username);
            return true;
        }
        return false;
    }

    static logout() {
        localStorage.removeItem("currentUser");
    }

    static getCurrentUser() {
        return localStorage.getItem("currentUser");
    }
}

export default UserController;
