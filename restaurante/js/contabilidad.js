let ventas = document.getElementById("ventas").value;
let fecha = document.getElementById("fecha").value;
let ingresos = document.getElementById("ingresos").value;
let egresos = document.getElementById("egresos").value;
let concepto = document.getElementById("concepto").value;
let valor = document.getElementById("valor").value;

function validarFormulario() {
    if (ventas == "" || fecha == "" || ingresos == "" || egresos == "" || concepto == "" || valor === "") {
        console.log("Por favor, complete todos los campos del formulario.");
        return false;
    }

        function solonumeros() {
            let regex = /^\d+$/;
            if (regex.test(ventas) && regex.test(ingresos) && regex.test(egresos) && regex.test(valor)) {
                console.log("Los campos de ventas, ingresos, egresos y valor contienen solo números.");
            } else {
                console.log("Los campos de ventas, ingresos, egresos y valor deben contener solo números.");
            }
        }

    return true;
}