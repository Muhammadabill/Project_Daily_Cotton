// ================================
// DEFAULT USERS (AUTO CREATED)
// ================================
let users = JSON.parse(localStorage.getItem("users"));

if (!users) {
    users = [
        {
            nama: "Administrator",
            username: "admin",
            password: "123",
            role: "admin"
        },
        {
            nama: "User Satu",
            username: "user1",
            password: "123",
            role: "user"
        }
    ];
    localStorage.setItem("users", JSON.stringify(users));
}

// ================================
// REGISTER
// ================================
function register() {
    const nama = document.getElementById("namaLengkap").value.trim();
    const username = document.getElementById("regUsername").value.trim();
    const password = document.getElementById("regPassword").value.trim();

    if (!nama || !username || !password) {
        alert("Semua data wajib diisi!");
        return;
    }

    if (password.length < 3) {
        alert("Password minimal 3 karakter!");
        return;
    }

    if (users.find(u => u.username === username)) {
        alert("Username sudah digunakan!");
        return;
    }

    users.push({
        nama,
        username,
        password,
        role: "user"
    });

    localStorage.setItem("users", JSON.stringify(users));
    alert("Registrasi berhasil, silakan login!");
    window.location.href = "login.html";
}

// ================================
// LOGIN
// ================================
function login() {
    const username = document.getElementById("loginUsername").value.trim();
    const password = document.getElementById("loginPassword").value.trim();

    const user = users.find(
        u => u.username === username && u.password === password
    );

    if (!user) {
        alert("Username atau password salah!");
        return;
    }

    localStorage.setItem("login", "true");
    localStorage.setItem("username", user.username);
    localStorage.setItem("role", user.role);

    if (user.role === "admin") {
        window.location.href = "admin_dashboard.html";
    } else {
        window.location.href = "user.html";
    }
}
