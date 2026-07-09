let codigo = document.getElementById("codigo").value;
let nombre_producto = document.getElementById("nombre_producto").value;
let cantidad = document.getElementById("cantidad").value;
let marca = document.getElementById("marca").value;

function validarFormulario() {
    if (codigo == "" || nombre_producto == "" || cantidad == "" || marca === "") {
        console.log("Por favor, complete todos los campos del formulario.");
        return false;
    }

        function solonumeros() {
            let regex = /^\d+$/;
            if (regex.test(codigo) && regex.test(cantidad)) {
                console.log("Los campos de código y cantidad contienen solo números.");
            } else {
                console.log("Los campos de código y cantidad deben contener solo números.");
            }
        }

        function sololetras() {
            let regex = /^[a-zA-Z]+$/;
            if (regex.test(nombre_producto) && regex.test(marca)) {
                console.log("Los campos de nombre del producto y marca contienen solo letras.");
            } else {
                console.log("Los campos de nombre del producto y marca deben contener solo letras.");
            }
        }

    return true;
}

document.getElementById("btnGuardar").onclick = GuardarProducto;