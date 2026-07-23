function validarFormulario() {
let codigo = document.getElementById("codigo").value;
let nombre_producto = document.getElementById("nombre_producto").value;
let cantidad = document.getElementById("cantidad").value;
let marca = document.getElementById("marca").value;


    if (!codigo || !nombre_producto || !cantidad || !marca) {
        console.log("Por favor, complete todos los campos del formulario.");
 Swal.fire({
            position: "top-end",
            icon: "success",
            title: "sus datos estan vacios",
            showConfirmButton: false,
            timer: 1500
        });
    }
 else {
       {
        let regex = /^\d+$/;
        if (!regex.test(codigo) && !regex.test(cantidad)) {
            console.log("Los campos de código y cantidad contienen solo números.");
                        console.log("Los campos de código y cantidad deben contener solo números.");
             Swal.fire({
            position: "top-end",
            icon: "success",
            title: "sus datos solo puden contener numeros",
            showConfirmButton: false,
            timer: 1500
        });
        return false;
        } 
    }

    {
        let regex = /^[a-zA-Z]+$/;
        if (!regex.test(nombre_producto) && !regex.test(marca)) {
            console.log("Los campos de nombre del producto y marca contienen solo letras.");
             Swal.fire({
            position: "top-end",
            icon: "success",
            title: "sus datos solo puden contener letras",
            showConfirmButton: false,
            timer: 1500
        });
        return false;
        }
    }
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