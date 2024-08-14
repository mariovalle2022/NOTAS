document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Obtener los valores ingresados por el usuario
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Aquí podrías agregar lógica de autenticación (por ejemplo, comparar con un usuario/contraseña predefinido)

    // Simulación de autenticación exitosa
    if (username === "admin" && password === "1234") {
        // Redirigir a la página de menú
        window.location.href = "MENU.HTML";
    } else {
        alert('Usuario o contraseña incorrectos');
    }
});
