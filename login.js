function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "admin" && password === "123") {
        localStorage.setItem("login", "true");
        localStorage.setItem("role", "admin");
        window.location.href = "admin_dashboard.html";
    }
    else if (username === "user1" && password === "123") {
        localStorage.setItem("login", "true");
        localStorage.setItem("role", "user");
        window.location.href = "user_dashboard.html"; 
    }
    else {
        alert("Username atau password salah!");
    }
}
