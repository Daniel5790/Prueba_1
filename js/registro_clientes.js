function validar() {
    var user = document.getElementById("user");
    var email = document.getElementById("email");
    var pass1 = document.getElementById("pass1");
    var pass2 = document.getElementById("pass2");
    var ciudad = document.getElementById("ciudad").selectedIndex;
    var elementoCHECK = document.getElementById("terminos");

    if (user.value.length == 0) {
        alert("Debe ingresar el Usuario");
        user.focus();
        return false;
    }
    if (email.value.length == 0) {
        alert("Por favor, ingrese su Email");
        email.focus();
        return false;
    }
    if (pass1.value.length < 8) {
        alert("Debe ingresar una contraseña de más de 8 caracteres");
        pass1.focus();
        return false;
    }
    else if (pass1.value != pass2.value) {
        alert("Las contraseñas no coinciden");
        pass2.focus();
        return false;
    }
    if (ciudad == 0 || ciudad == null) {
        alert("Por favor, seleccione una ciudad");
        return false;
    }
    else {
        alert("Datos de formulario enviados exitosamente.");
        document.getElementById("myForm").reset();
        return false;
    }
}