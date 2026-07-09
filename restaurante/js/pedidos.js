let pedidos = document.getElementById("pedidos").value;
let numero = document.getElementById("numero").value;
let producto = document.getElementById("producto").value;
let cantidad = document.getElementById("cantidad").value;
let direccion = document.getElementById("direccion").value;
let pago = document.getElementById("pago").value;

function validarFormulario() {
    if (pedidos == "" || numero == "" || producto == "" || cantidad == "" || direccion == "" || pago == "") {
        console.log("Por favor, complete todos los campos del formulario.");
        return false;

        
 if (telefono.length () == 10) {
        console.log("Maximo 10 numeros.");
    }
    else
    console.log("enviado correctamente.");
return true;
    }

    function solonumeros() {
        let regex = /^\d+$/;
        return regex.test(numero) && regex.test(cantidad);
    }

}

document.getElementById("btnConfirmar").onclick = ConfirmarPedido;