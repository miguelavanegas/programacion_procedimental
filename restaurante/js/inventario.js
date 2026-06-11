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
            return regex.test(codigo) && regex.test(cantidad);
        }

        function sololetras() {
            let regex = /\d/;
            return regex.test(nombre_producto) && regex.test(marca);
        }

    return true;
}