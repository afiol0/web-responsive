function validarFormulario() {
    // Declaración de variables

    // Asignamos a las variables su respectivo campo a validar.
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let mensaje = document.getElementById("mensaje").value;
    let telefono = document.getElementById("telefono").value;
    let patronEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    let patronTelefono = /^\d{9}$/

    // Si el nombre no tiene contenido no será válido
    if (nombre.trim() === "") {
        alert("Por favor, no puede dejar el campo vacío.")
        return false;
    }
    // Si el email no tiene contenido no será válido
    if (email.trim() === ""){
        alert("Por favor, no puede dejar el campo vacío.")
        return false;
    }
    // Si el email no tiene el patrón determinado no será válido
    if(!email.match(patronEmail)) {
        alert("Por favor, ingresa un email válido.")
        return false;
    }
    // Si el mensaje no contiene nada no será válido.
    if (mensaje.trim() === ""){
        alert("Por favor, ingrese el mensaje para el contacto.")
        return false;
    }

    if (!telefono.match(patronTelefono)){
        alert("Por favor, ingrese un número de teléfono válido.")
        return false;
    }
    
    return true;
}