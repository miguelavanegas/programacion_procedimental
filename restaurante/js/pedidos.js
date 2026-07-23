let numero = document.getElementById("numero").value;
let producto = document.getElementById("producto").value;
let cantidad = document.getElementById("cantidad").value;
let direccion = document.getElementById("direccion").value;
let pago = document.getElementById("pago").value;

function validarFormulario() {
    if (!numero || !producto || !cantidad || !direccion || !pago) {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Por favor, complete todos los campos del formulario.",
            showConfirmButton: false,
            timer: 1500
        });
    }
    else {
    
        let regex = /^\d+$/;
        if (regex.test(numero) && regex.test(cantidad));

    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "sus datos solo puden contener numeros",
        showConfirmButton: false,
        timer: 1500
    });

        Swal.fire({
        position: "top-end",
        icon: "success",
        title: "sus datos fueron guardados de manera correcta",
        showConfirmButton: false,
        timer: 1500
    });
}
   

}

document.getElementById("btnGuardar").onclick = validarFormulario;