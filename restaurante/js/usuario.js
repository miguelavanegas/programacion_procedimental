let nombre = document.getElementById("nombre").value;
let apellidos = document.getElementById("apellidos").value;
let pais = document.getElementById("pais").value;
let pago = document.getElementById("pago").value;
let telefono = document.getElementById("telefono").value;
let documento = document.getElementById("documento").value;
let numero_documento = document.getElementById("numero_documento").value;
let nacimiento = document.getElementById("nacimiento").value;

function validarFormulario() {
    if (nombre == "" || apellidos == "" || pais == "" || pago == "" || telefono == "" || documento == "" || numero_documento === "" || nacimiento === "") {
        console.log("Por favor, complete todos los campos del formulario.");
        return false;
    }

        const regex = /\d/;
    return regex.test(texto);

    if (TieneNumeros(nombre) || TieneNumeros(apellidos)) {
        console.log("El nombre y los apellidos no pueden contener números.");
    } else
    
    if (telefono.length () == 10) {
        console.log("Maximo 10 numeros.");
    } else

    if (numero_documento.length () == 10) {
        console.log("Maximo 10 numeros.");
    }
    
else {
console.log("enviado correctamente.");
return true;
    }
    
}

document.getElementById("btnConfirmar").onclick = ConfirmarUsuario;